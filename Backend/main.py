from fastapi import FastAPI
from model import load_dataset

app = FastAPI()

data = None

@app.on_event("startup")
def startup_event():
    global data
    print("Loading dataset...")
    data = load_dataset()
    print("Dataset shape:", data.shape)

@app.get("/")
def home():
    return {"message": "Idea Novelty Analyzer API running"}

@app.post("/analyze")
def analyze_idea(idea: str):
    return {"message": "Idea received", "idea": idea}