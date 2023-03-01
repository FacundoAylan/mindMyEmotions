#from typing import Union
#librerias para que funcione la API

from fastapi import FastAPI
from pydantic import BaseModel
import json
#librerias para que funcione la firebase
import firebase_admin
from firebase_admin import credentials, firestore,firestore_async
from datetime import datetime

class completar_Datos_Usuario(BaseModel):
    mail:str
    contraseña:str
    Edad: str
    Nombre_de_usuario: str
    Género_con_el_que_te_identificas: str
    Ciudad_país: str

app = FastAPI()


now = datetime.now()

cred = credentials.Certificate("serviceAccountKey.json")

# Application Default credentials are automatically created.
firebase_admin.initialize_app(cred)
db = firestore_async.client()

@app.get("/")
async def first_root():
    
    return {"Presentacion": "Api desarrollada para MyEmotion."}

class Buscar_usuario_contraseña(BaseModel):
    mail: str
    contraseña: str  

#Buscar Usuario y contraseña
#Devuelve un mensaje que indica si existe o no el usuario, y la contraseña correcta o no
@app.post("/Buscar_usuario_contraseña")
async def Buscar_usuario_contraseña(user_date:Buscar_usuario_contraseña):
    #inicio en falso la variable que voy a retornar
    
    #conecto a la base de datos pidiendo que busque el id de usuario: el mail
    usuario_doc=db.collection('usuarios').where("mail","==","jorge@gmail.com").get()
    if usuario_doc==[]:
        Mensaje="Usuario y/ contraseña no coinciden"
    else:
            
        for clave in usuario_doc:
            key=clave.id
        usuario_doc_completo=db.collection('usuarios').document(key).get()
        usuario_diccionario=usuario_doc_completo.to_dict()
        if usuario_diccionario['contraseña']== "12345" :

            Mensaje="Usuario y/ contraseña ingresados correctamente"
        else:
            Mensaje="Contraseña ingresada incorrectamente"

    return {Mensaje}
