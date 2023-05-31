
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pandas as pd
app = FastAPI()


origins = ["*"]
methods = ["*"]
headers = ["*"]

app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = methods,
    allow_headers = headers    
)

class Comment(BaseModel):
    comment: str


max_sequence_length=100
train_data = pd.read_csv('train.csv')

train_texts = train_data['comment_text'].values
tokenizer = Tokenizer()
tokenizer.fit_on_texts(train_texts)




@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/predict")
async def predict(comment: Comment):
    loaded_model = load_model('toxicity_model.h5')
    sequence = tokenizer.texts_to_sequences([comment.comment])
    padded_sequence = pad_sequences(sequence, maxlen=max_sequence_length)
    predictions = loaded_model.predict(padded_sequence)[0]
    categories = ['toxic', 'severe_toxic', 'obscene', 'threat', 'insult', 'identity_hate']
    predicted_categories = [category for i, category in enumerate(categories) if predictions[i] > 0.5]
    if len(predicted_categories)==0:
        predicted_categories=["not_toxic"]
    return {"predicted_categories": predicted_categories}
