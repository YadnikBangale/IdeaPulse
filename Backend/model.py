import pandas as pd
import numpy as np
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

    print("Generating embeddings from descriptions...")

    embeddings = model.encode(data["description"].tolist())

    print("Embeddings generated!")

    np.save("../Dataset/idea_embeddings.npy", embeddings)

    print("Embeddings saved as idea_embeddings.npy")

    return embeddings