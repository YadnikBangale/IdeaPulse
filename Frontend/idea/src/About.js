import React, { useState } from "react";

function About() {

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "About the Project",
      content: "IdeaPulse is an AI-powered platform that evaluates startup ideas and measures how unique they are using machine learning and semantic similarity search."
    },
    {
      title: "What is Novelty Score?",
      content: "Novelty Score measures how unique an idea is. Higher score means more innovative."
    },
    {
      title: "What is Innovation Distance?",
      content: "It measures how far your idea is from existing ideas in vector space. Higher means more different."
    },
    {
      title: "How It Works",
      content: "Idea → Embedding → FAISS Search → Similar Ideas → Novelty Score"
    },
    {
      title: "Technology Stack",
      content: "React, FastAPI, Sentence Transformers, FAISS, Bootstrap"
    },
    {
      title: "Creators",
      content: " Gouri Rajkarne (ML Engineer), Yadnik Bangale (Full Stack Developer)"
    }
  ];

  return (

    <div className="container mt-5 text-white">

      <h1 className="text-center mb-4">
        About IdeaPulse
      </h1>

      {sections.map((section, index) => (

        <div key={index} className="mb-3">

          <div
            className="p-3"
            style={{
              background: "rgba(255,255,255,0.2)",
              cursor: "pointer",
              borderRadius: "10px"
            }}
            onClick={() => toggle(index)}
          >
            <h5>{section.title}</h5>
          </div>

          {openIndex === index && (
            <div
              className="p-3"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "10px"
              }}
            >
              {section.content}
            </div>
          )}

        </div>

      ))}

    </div>
  );
}

export default About;