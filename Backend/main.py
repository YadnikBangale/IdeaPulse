from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
import numpy as np
import faiss

from model import load_dataset, generate_embeddings

app = FastAPI()

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
    dimension = embeddings.shape[1]

    index = faiss.IndexFlatL2(dimension)
    index.add(embeddings)

    print("FAISS index ready!")


@app.get("/")
def home():
    return {"message": "Idea Novelty Analyzer API running"}


@app.post("/analyze")
def analyze_idea(request: IdeaRequest):

    idea_text = request.idea
    print("Data Received:", idea_text)

    query_embedding = model.encode([idea_text])

    distances, indices = index.search(query_embedding, 5)

    similar_ideas = data.iloc[indices[0]]["description"].tolist()

    return {
        "idea": idea_text,
        "similar_ideas": similar_ideas
    }