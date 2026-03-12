from fastapi import FastAPI
from model import load_dataset, generate_embeddings
from pydantic import BaseModel

app = FastAPI()

data = None
embeddings = None


class IdeaRequest(BaseModel):
    idea: str


@app.on_event("startup")
def startup_event():
    global data, embeddings

    print("Loading dataset...")
    data = load_dataset()
    print("Dataset shape:", data.shape)

    print("Generating embeddings...")
    embeddings = generate_embeddings(data)
    print("Embeddings shape:", embeddings.shape)


@app.get("/")
def home():
    return {"message": "Idea Novelty Analyzer API running"}


@app.post("/analyze")
def analyze_idea(request: IdeaRequest):
    idea_text = request.idea

    print("Data Received:", idea_text)

    return {
        "message": "Idea received",
        "idea": idea_text
    }