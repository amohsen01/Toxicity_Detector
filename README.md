# Toxicity Detector

The Toxicity Detector is a React framework website that uses Tensorflow in Python to detect if a comment falls into one or more of seven predefined categories. The categories are toxic, severe toxic, obscene, threat, insult, identity hate, and not toxic.

## Category Labels

The seven category labels are as follows:

- Toxic
- Severe Toxic
- Obscene
- Threatening
- Insulting
- Identity Hate
- Not Toxic

These labels help classify and identify the type of toxicity present in a comment.

## Dataset

The model used in the Toxicity Detector is trained on a dataset available at [https://github.com/tianqwang/Toxic-Comment-Classification-Challenge](https://github.com/tianqwang/Toxic-Comment-Classification-Challenge). This dataset provides a collection of toxic comments for training and evaluation purposes.

## Model Architecture

The model used in the Toxicity Detector is defined as follows:

```
model = Sequential()
model.add(Embedding(vocab_size, 300, input_length=max_sequence_length))
model.add(Bidirectional(LSTM(128, return_sequences=True)))
model.add(Dropout(0.2))
model.add(Flatten())
model.add(Dense(128, activation='relu'))
model.add(Dense(64, activation='relu'))
model.add(Dropout(0.2))
model.add(Dense(6, activation='sigmoid'))
```

The architecture consists of an embedding layer followed by a bidirectional LSTM layer to capture contextual information in the comment text. Dropout layers are incorporated to reduce overfitting. The final output layer consists of six neurons with sigmoid activation, representing the probabilities of the comment falling into each of the toxic categories.

## Web Framework

The Toxicity Detector website uses the React framework for the frontend. The backend is powered by FastAPI, which loads the trained model and handles the inference process. When a user enters a comment, FastAPI sends the comment to the model, which predicts the probabilities of the comment falling into each category. FastAPI then returns the results to the frontend, which displays the corresponding labels based on the highest probability values.

By combining the power of React, FastAPI, and Tensorflow, the Toxicity Detector provides a user-friendly interface to analyze and classify the toxicity of comments.
