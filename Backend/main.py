from fastapi import FastAPI 

app = FastAPI()

@app.get("/")
def home():
    return{"message":"Idea Novelty Analyzer API running"}

@app.post("/analyze")
def analyze_idea(idea: str):
    return{"message":"Idea received", "idea" : idea}