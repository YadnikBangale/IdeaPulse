from fastapi import FastAPI
from pydantic import BaseModel
from model import generate_idea_map
from sentence_transformers import SentenceTransformer
from fastapi.middleware.cors import CORSMiddleware
from model import load_dataset, generate_embeddings, build_faiss_index, search_similar_ideas


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = None
embeddings = None
model = None
index = None


class IdeaRequest(BaseModel):
    idea: str


@app.on_event("startup")
def startup_event():

    global data, embeddings, model, index

    print("Loading dataset...")
    data = load_dataset()
    print("Dataset shape:", data.shape)

    print("Generating embeddings...")
    embeddings = generate_embeddings(data)
    print("Embeddings shape:", embeddings.shape)

    print("Loading embedding model...")
    model = SentenceTransformer('all-MiniLM-L6-v2')

    print("Building FAISS index...")
    index = build_faiss_index(embeddings)

    print("Generating idea map...")
    generate_idea_map(data, embeddings)

@app.get("/")
def home():
    return {"message": "Idea Novelty Analyzer API running"}


@app.post("/analyze")
def analyze_idea(request: IdeaRequest):

    idea_text = request.idea

    print("Data Received:", idea_text)

    similarities, similar_ideas = search_similar_ideas(
        idea_text,
        model,
        index,
        data
    )

    max_similarity = similarities[0][0]

    novelty_score = 1 - max_similarity

    innovation_distance = float((1 - similarities).mean())

    if novelty_score < 0.2:
        interpretation = "Common Idea"
    elif novelty_score < 0.5:
        interpretation = "Moderately Novel"
    else:
        interpretation = "Highly Innovative"

    return {
        "idea": idea_text,
        "novelty_score": float(novelty_score),
        "innovation_distance": innovation_distance,
        "interpretation": interpretation,
        "similar_ideas": similar_ideas
    }