#from typing import Union
#librerias para que funcione la API

from fastapi import FastAPI
from pydantic import BaseModel
import json
#librerias para que funcione la firebase
import firebase_admin
from firebase_admin import credentials, firestore,firestore_async
from datetime import datetime

app = FastAPI()


now = datetime.now()

cred = credentials.Certificate("serviceAccountKey.json")

# Application Default credentials are automatically created.
firebase_admin.initialize_app(cred)
db = firestore_async.client()

@app.get("/")
async def first_root():
    
    return {"Presentacion": "Api desarrollada para MyEmotion."}

class Buscar_usuario_contrasenia(BaseModel):
    mail: str
    contrasenia: str  

#Buscar Usuario y contraseña
#Devuelve un mensaje que indica si existe o no el usuario, y la contraseña correcta o no
@app.post("/Buscar_usuario_contraseña")
def Buscar_usuario_contrasenia(user_date:Buscar_usuario_contrasenia):
    #inicio en falso la variable que voy a retornar
    
    #conecto a la base de datos pidiendo que busque el id de usuario: el mail
    usuario_doc=db.collection('usuarios').where("mail","==",user_date.mail).get()
    if usuario_doc==[]:
        Mensaje="Usuario y/ contraseña no coinciden"
    else:
            
        for clave in usuario_doc:
            key=clave.id
        usuario_doc_completo=db.collection('usuarios').document(key).get()
        usuario_diccionario=usuario_doc_completo.to_dict()
        if usuario_diccionario['contraseña']== user_date.contrasenia :

            Mensaje="Usuario y/ contraseña ingresados correctamente"
        else:
            Mensaje="Contraseña ingresada incorrectamente"

    return {Mensaje}
