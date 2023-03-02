#from typing import Union
#librerias para que funcione la API
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
import json
#librerias para que funcione la firebase
import firebase_admin
from firebase_admin import credentials, firestore,firestore_async
from datetime import datetime

class Buscar_usuario_contrasenia_class(BaseModel):
    mail: str
    contrasenia: str  

cred = credentials.Certificate("serviceAccountKey.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()

app = FastAPI()

@app.get("/")
async def root():
    
    return {"Presentacion": "Api desarrollada para MyEmotion"}


@app.post("/usuario_contrasenia1/")
def Buscar_usuario_contrasenia(user_date:Buscar_usuario_contrasenia_class):
    #inicio en falso la variable que voy a retornar
    Mensaje="if no funciona"
    #conecto a la base de datos pidiendo que busque el id de usuario: el mail
    usuario_doc=db.collection('usuarios').where("mail_y_contrasenia","array_contains",user_date.mail).get()
    
    if not usuario_doc:
        Mensaje="Usuario y/ contraseña no coinciden"
    else:
            
        for clave in usuario_doc:
            key=clave.id
        usuario_doc_completo=db.collection('usuarios').document(key).get()
        usuario_diccionario=usuario_doc_completo.to_dict()
        if usuario_diccionario['mail_y_contrasenia']== user_date.contrasenia :

            Mensaje="Usuario y/ contraseña ingresados correctamente"
        else:
            Mensaje="Contraseña ingresada incorrectamente"
       #inicio en falso la variable que voy a retornar

    return {"Mensaje":Mensaje}
"""

@app.post("/Buscar_usuario_contraseña/")
def Buscar_usuario_contrasenia(user_date:Buscar_usuario_contrasenia_class):
    #inicio en falso la variable que voy a retornar
    Mensaje="if no funciona"
    #conecto a la base de datos pidiendo que busque el id de usuario: el mail
    usuario_doc=db.collection('usuarios').where("mail","==",user_date.mail).get()
    
    if not usuario_doc:
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
       
    
    return {"Mensaje":Mensaje}
"""
if __name__ == "__main__":
    
    uvicorn.run("index:app",reload=True)
