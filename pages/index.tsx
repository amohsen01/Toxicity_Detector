import React, { useState } from "react";
import { motion } from "framer-motion";

interface PredictionResponse {
  predicted_categories: string[];
}

interface CommentForm {
  comment: string;
}

const categoryLabels = {
  toxic: "Toxic",
  severe_toxic: "Severe Toxic",
  obscene: "Obscene",
  threat: "Threatening",
  insult: "Insulting",
  identity_hate: "Identity Hate",
  not_toxic: "Not Toxic"
};

const App: React.FC = () => {
  const [comment, setComment] = useState("");
  const [prediction, setPrediction] = useState<string[]>([]);
  const [isLoading, setIsPredicting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsPredicting(true);

      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
      });

      if (!response.ok) {
        throw new Error("Prediction request failed");
      }

      const data: PredictionResponse = await response.json();
      setPrediction(data.predicted_categories || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPredicting(false);
    }
  };

  const formatPrediction = (): string => {
    if (prediction.length > 0) {
      const labels = prediction.map((category) => categoryLabels[category]);
      return `This comment was ${labels.join(", ")}`;
    } else {
      return "The comment appears to be fine.";
    }
  };
  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="title"
      >
        Was this Toxic?
      </motion.h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="form-label">Comment:</label>
        <input
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          {isLoading ? "Predicting..." : "Predict"}
        </button>
      </form>
      {isLoading && (
        <div className="loading-animation">
          <div className="loader"></div>
        </div>
      )}
      {prediction.length > 0 && !isLoading && (
        <div className="prediction-container">
          <h2 className="prediction-title">Prediction:</h2>
          <p className="prediction-text">{formatPrediction()}</p>
        </div>
      )}
    </div>
  );
};

export default App;
