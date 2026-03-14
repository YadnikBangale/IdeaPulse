import pandas as pd
import numpy as np
import faiss
from sentence_transformers import SentenceTransformer


def load_dataset():
    path = "../Dataset/idea_novelty_starter_dataset.csv"

    print("Reading dataset from:", path)

    data = pd.read_csv(path)

    print("Dataset loaded successfully")
    print(data.head())

    return data


def generate_embeddings(data):

    print("Loading embedding model...")

    model = SentenceTransformer('all-MiniLM-L6-v2')

    print("Generating embeddings from title + description...")

    texts = (data["title"] + " " + data["description"]).tolist()

    embeddings = model.encode(texts)

    embeddings = np.array(embeddings).astype("float32")

    print("Embeddings generated!")

    np.save("../Dataset/idea_embeddings.npy", embeddings)

    print("Embeddings saved as idea_embeddings.npy")

    return embeddings


def load_embeddings():

    print("Loading saved embeddings...")

    embeddings = np.load("../Dataset/idea_embeddings.npy")

    print("Embeddings loaded:", embeddings.shape)

    return embeddings


def build_faiss_index(embeddings):

    dimension = embeddings.shape[1]

    print("Building FAISS index...")

    # normalize vectors for cosine similarity
    faiss.normalize_L2(embeddings)

    index = faiss.IndexFlatIP(dimension)

    index.add(embeddings)

    print("FAISS index ready")

    return index


def search_similar_ideas(query_text, model, index, data, k=5):

    print("Encoding query idea...")

    query_vector = model.encode([query_text])

    query_vector = np.array(query_vector).astype("float32")

    faiss.normalize_L2(query_vector)

    print("Searching similar ideas...")

    similarities, indices = index.search(query_vector, k)

    results = []

    for i in indices[0]:
        results.append({
            "title": data.iloc[i]["title"],
            "description": data.iloc[i]["description"],
            "domain": data.iloc[i]["domain"]
        })

    return similarities, results