from fastapi import FastAPI
from model import load_dataset, generate_embeddings
from pydantic import BaseModel
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer

app = FastAPI()

data = None
embeddings = None
model = None


class IdeaRequest(BaseModel):
    idea: str


@app.on_event("startup")
def startup_event():
    global data, embeddings, model

    print("Loading dataset...")
    data = load_dataset()
    print("Dataset shape:", data.shape)

    print("Generating embeddings...")
    embeddings = generate_embeddings(data)
    print("Embeddings shape:", embeddings.shape)

    print("Loading embedding model...")
    model = SentenceTransformer('all-MiniLM-L6-v2')


@app.get("/")
def home():
    return {"message": "Idea Novelty Analyzer API running"}


@app.post("/analyze")
def analyze_idea(request: IdeaRequest):
    idea_text = request.idea

    print("Data Received:", idea_text)

    query_embedding = model.encode([idea_text])

    similarities = cosine_similarity(query_embedding, embeddings)[0]

    top_indices = similarities.argsort()[-5:][::-1]

    similar_ideas = data.iloc[top_indices]["description"].tolist()

    return {
        "idea": idea_text,
        "similar_ideas": similar_ideas
    }