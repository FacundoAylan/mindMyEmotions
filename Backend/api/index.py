#librerias para que funcione la API
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
import json
#librerias para que funcione firebase
import firebase_admin
from firebase_admin import credentials, firestore,firestore_async
from datetime import datetime

class Buscar_usuario_contrasenia_class(BaseModel):
    Mail: str
    Contrasenia: str  

class Registrar_Datos_Usuario_class(BaseModel):
    Mail:str
    Edad: int
    Nombre_de_usuario: str
    Apellido_de_usuario: str
    Contrasenia:str
    Genero: str
    Ciudad: str

cred = credentials.Certificate("serviceAccountKey.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()
app = FastAPI()

@app.get("/")
async def root():
    
    return {"Presentacion": "Api desarrollada para MyEmotion"}

#pide dos datos usuario y contraseña
#Busca usuario y contraseña
#devuelve un mensaje segun el resultado de la busqueda.
@app.post("/usuario_contrasenia/")
def Buscar_usuario_contrasenia(user_date:Buscar_usuario_contrasenia_class):
    Mensaje = "No coinciden"
    usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",user_date.Mail).get()
    
    if usuario_doc==[]:
        Mensaje="Usuario y/ contraseña no coinciden"
    else:
        for clave in usuario_doc:
            key=clave.id
        usuario_doc_completo=db.collection('usuarios').document(key).get()
        usuario_diccionario=usuario_doc_completo.to_dict()
        
        consultar_datos=usuario_diccionario['Datos_registro']
        
        clave=consultar_datos['Contrasenia']
    
        if consultar_datos['Contrasenia']== user_date.Contrasenia:
            Mensaje="Usuario y/ contraseña ingresados correctamente"
        else:
            Mensaje="Contraseña ingresada incorrectamente"
    return {"Mensaje":Mensaje}
    
#comentario para hacer el push 
#pide 7 datos Mail:str, Edad, Nombre_de_usuario, Apellido_de_usuario, Contrasenia, Genero, Ciudad
#registra los datos junto con la fecha actual
#devuelve un mensaje segun el resultado del registro
@app.post("/Registro/")
def Registrar_Datos_Usuario(user_date:Registrar_Datos_Usuario_class):

    usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",user_date.Mail).get()
    
    if(user_date.Edad<6 or user_date.Edad>100 ):
        Mensaje="Edad invalida"
    elif (not(user_date.Apellido_de_usuario.isalpha()) or not(user_date.Nombre_de_usuario.isalpha())):
        Mensaje="Apellido o Nombre invalido"
    elif usuario_doc!=[]:
         Mensaje="Usuario existe"
    else:
        datos={"Datos_registro":{"Mail": user_date.Mail,"Edad": user_date.Edad,"Apellido_de_usuario": user_date.Apellido_de_usuario,"Nombre_de_usuario": user_date.Nombre_de_usuario,"Contrasenia": user_date.Contrasenia,"Genero": user_date.Genero,"Ciudad": user_date.Ciudad,"Fecha de registro":datetime.now()}}
        db.collection('usuarios').document().set(datos,merge=True)
        Mensaje="Se registro correctamente"
    return Mensaje
if __name__ == "__main__":
    uvicorn.run("index:app",reload=True)