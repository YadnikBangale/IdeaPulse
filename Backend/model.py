import pandas as pd

def load_dataset():
    path = "../Dataset/idea_novelty_starter_dataset.csv"

    print("Reading dataset from:", path)

    data = pd.read_csv(path)

    print("Dataset loaded successfully")
    print(data.head())

    return data