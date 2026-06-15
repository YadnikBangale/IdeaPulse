# IdeaPulse

> AI-Powered Idea Novelty Analyzer

IdeaPulse is a machine learning-powered platform that helps innovators, students, entrepreneurs, and researchers evaluate the originality of their ideas. By leveraging Natural Language Processing (NLP) and semantic similarity analysis, IdeaPulse compares user-submitted ideas against existing concepts and generates a novelty score.

---

## Features

- AI-powered idea analysis
- Novelty scoring system
- Semantic similarity search
- Fast idea comparison using vector embeddings
- Innovation distance measurement
- User-friendly web interface
- Dataset-driven evaluation

---

## Project Architecture

```
IdeaPulse/
│
├── Backend/          # Flask/Python backend
├── Frontend/idea/    # Frontend application
├── Dataset/          # Dataset used for similarity analysis
└── README.md
```

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask

### Machine Learning & NLP
- Sentence Transformers
- FAISS
- NumPy
- Pandas

### Database
- Dataset-based similarity storage

---

## How It Works

1. User submits an idea title and description.
2. The text is converted into embeddings using NLP models.
3. FAISS performs efficient similarity search against stored ideas.
4. Similar ideas are identified.
5. A novelty score is calculated.
6. Results are displayed with similarity insights and innovation metrics.

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/YadnikBangale/IdeaPulse.git
cd IdeaPulse
```

### Backend Setup

```bash
cd Backend
pip install -r requirements.txt
```

### Run Backend

```bash
python app.py
```

### Frontend Setup

Open the frontend folder and launch:

```bash
Frontend/idea/index.html
```

or use a local server:

```bash
npx live-server
```

---

## Example Workflow

### Input

```
Idea:
An AI-powered platform that helps students discover scholarships and career opportunities.
```

### Output

```
Novelty Score: 82%

Most Similar Ideas:
1. Scholarship Finder Platform
2. Career Guidance Portal

Innovation Distance: High
```

---

## Use Cases

- Startup idea validation
- Hackathon projects
- Research innovation analysis
- Student project evaluation
- Entrepreneurship support
- Product concept assessment

---

## Future Improvements

- Real-time web idea search
- Patent database integration
- Advanced innovation analytics
- User authentication
- Idea history tracking
- AI-generated improvement suggestions
- Multi-language support

---

## Contributors

### Yadnik Bangale
**Lead Developer**
- Designed and developed the IdeaPulse platform
- Built the frontend and backend architecture
- Integrated machine learning components
- Implemented user interaction workflows

### Gouri Rajkarne
**Data Science Lead**
- Developed the data science pipeline
- Prepared and curated datasets
- Implemented semantic similarity analysis
- Worked on embeddings, novelty scoring, and model evaluation
- Contributed to the machine learning framework powering IdeaPulse

GitHub: https://github.com/GouriRajkarne
---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Support

If you found this project useful, please consider giving it a star on GitHub.

**IdeaPulse — Measuring the originality of ideas through AI.**
