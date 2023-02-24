#from typing import Union
#librerias para que funcione la API

from fastapi import FastAPI
from pydantic import BaseModel
import json
#librerias para que funcione la firebase
import firebase_admin
from firebase_admin import credentials, firestore

class Item(BaseModel):
    user: str
    pass_user: str

app = FastAPI()

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db=firestore.client()

@app.get("/")
async def read_root():
    
    return {"Presentacion": "Api desarrollada para MyEmotion"}


@app.post("/user/")
async  def save_user (user_date: Item):

    #crear un registro con el nombre como su id
    item_dict = user_date.dict()
    var_user=item_dict.get('user')
    db.collection('usuarios').document(var_user).set(item_dict)
    return  item_dict