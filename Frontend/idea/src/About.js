import React from "react";

function About() {

  return (

    <div className="container mt-5">

      <h1 className="text-center text-white mb-4">
        About IdeaPulse
      </h1>

      <div className="accordion" id="aboutAccordion">

        {/* ABOUT PROJECT */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#aboutProject"
            >
              About the Project
            </button>

          </h2>

          <div
            id="aboutProject"
            className="accordion-collapse collapse show"
            data-bs-parent="#aboutAccordion"
          >

            <div className="accordion-body">

              IdeaPulse is an AI-powered platform that evaluates startup
              ideas and measures how unique they are compared to
              existing ideas using machine learning and semantic
              similarity search.

            </div>

          </div>

        </div>


        {/* NOVELTY SCORE */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#noveltyScore"
            >
              What is Novelty Score?
            </button>

          </h2>

          <div
            id="noveltyScore"
            className="accordion-collapse collapse"
            data-bs-parent="#aboutAccordion"
          >

            <div className="accordion-body">

              The Novelty Score measures how unique an idea is compared
              to existing ideas in the dataset.

              <br /><br />

              It is calculated using semantic similarity between the
              user's idea and the most similar ideas in the database.

              <br /><br />

              <strong>Interpretation:</strong>

              <ul>
                <li>0.0 – 0.2 → Very common idea</li>
                <li>0.2 – 0.5 → Moderately novel idea</li>
                <li>0.5 – 1.0 → Highly innovative idea</li>
              </ul>

            </div>

          </div>

        </div>


        {/* INNOVATION DISTANCE */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#innovationDistance"
            >
              What is Innovation Distance?
            </button>

          </h2>

          <div
            id="innovationDistance"
            className="accordion-collapse collapse"
            data-bs-parent="#aboutAccordion"
          >

            <div className="accordion-body">

              Innovation Distance measures how far your idea is from
              existing ideas in the vector embedding space.

              <br /><br />

              Each idea is converted into a numerical vector using a
              language model. The system then calculates the distance
              between your idea and other ideas.

              <br /><br />

              A larger innovation distance indicates that your idea is
              more different and potentially more innovative.

            </div>

          </div>

        </div>


        {/* HOW IT WORKS */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#howWorks"
            >
              How It Works
            </button>

          </h2>

          <div
            id="howWorks"
            className="accordion-collapse collapse"
            data-bs-parent="#aboutAccordion"
          >

            <div className="accordion-body">

              1. The user enters an idea.  
              2. The idea is converted into an embedding using
              Sentence Transformers.  
              3. FAISS performs vector similarity search.  
              4. The system finds the closest ideas.  
              5. Novelty score and innovation distance are calculated.

            </div>

          </div>

        </div>


        {/* TECH STACK */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#techStack"
            >
              Technology Stack
            </button>

          </h2>

          <div
            id="techStack"
            className="accordion-collapse collapse"
            data-bs-parent="#aboutAccordion"
          >

            <div className="accordion-body">

              <ul>
                <li>React.js – Frontend</li>
                <li>FastAPI – Backend API</li>
                <li>Sentence Transformers – Idea Embeddings</li>
                <li>FAISS – Vector Similarity Search</li>
                <li>Bootstrap – UI Framework</li>
              </ul>

            </div>

          </div>

        </div>


        {/* CREATORS */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#creators"
            >
              Creators
            </button>

          </h2>

          <div
            id="creators"
            className="accordion-collapse collapse"
            data-bs-parent="#aboutAccordion"
          >

            <div className="accordion-body">

              <h5>Yadnik Bangale</h5>
              <p>Full Stack Developer – Frontend and Backend Development</p>

              <h5>Gouri Rajkarne</h5>
              <p>Machine Learning Engineer – AI Model and Embeddings</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default About;