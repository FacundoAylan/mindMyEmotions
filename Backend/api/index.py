#librerias para que funcione la API
import uvicorn
from typing import Union
from fastapi import FastAPI, File, UploadFile
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
import json
#librerias para que funcione firebase
import firebase_admin
from firebase_admin import credentials, firestore,firestore_async
from datetime import datetime

class inicio_sesion(BaseModel):
    Mail: str 
    Contrasenia: str

class registro_usuario(BaseModel):
    Mail:str 
    Edad: int
    Nombre_de_usuario: str
    Apellido_de_usuario: str
    Contrasenia:str
    Genero: str
    Ciudad: str

#funciones
#
#
#recibe un mail
#verifico que el mail sea correcto 
#devuelve un mensaje
def validar_mail(mail: str):
    mensaje=""
    lis_errores_MESAJE=["'Falta arroba' ","'Falta .com'"]
    lis_errores=["@",".com"]
    string_mail=mail
    for carac in string_mail:
        if carac == ' ':
            mensaje="'Hay espacios vacios' "
    for indice, palabra_str in enumerate (lis_errores):
        print(palabra_str)
        posicion = string_mail.find(palabra_str)
        if(posicion==-1):
            mensaje+=lis_errores_MESAJE[indice]   
    return mensaje
#recibe la edad
#verifico que la edad este entre 6 y 100 
#devuelve un mensaje
def validar_edad(edad: int):
    mensaje=""
    if(edad<6 or edad>100 ):
        mensaje="'Edad invalida' "
    return mensaje

def mensaje_error(dato_persona:str):
    if(dato_persona=="last_name_de_usuario"):
        mensaje="'Apellido invalido' "
    else:
        mensaje="'Nombre invalido' "
    return  mensaje
#recibe Apellido o Nombre
#verifico que no haya numero o caracteres en el nombre
#devuelve un mensaje
def validar_Apellido_o_Nombre(Apellido_o_Nombre: str, dato_persona:str):
    mensaje=""
    if not(Apellido_o_Nombre.isalpha()):
        mensaje=mensaje_error(dato_persona)

    return mensaje 

cred = credentials.Certificate("serviceAccountKey.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()
app = FastAPI()

def Reemplaza_datos(mail_user: str, clave_dict: str, nuevo_dato:str):
    Mensaje=""
    key=""
    usuario_doc=[]
    Mensaje+=validar_mail(mail_user)
    #si es edad paso el dato a numero entero
    if(clave_dict=="Edad"):
        nuevo_dato=int(nuevo_dato)
    #si no hay mensajes de error consulta a la base de datos
    if(Mensaje==""):
        #busca el id en la base de datos
        usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",mail_user).get()
        for clave in usuario_doc:
            key=clave.id
        clave="Datos_registro."+clave_dict
        datos={clave:nuevo_dato}
        #actualiza los datos
        db.collection('usuarios').document(key).update(datos)
        Mensaje="Se actulizo "+clave_dict
        
    return Mensaje
"""

def Editar_datos_modulo(mail_user: str, clave_dict: str, nuevo_dato:str):
    Mensaje=""
    key=""
    usuario_doc=[]
    Mensaje+=validar_mail(mail_user)

    #si no hay mensajes de error consulta a la base de datos
    if(Mensaje==""):
        #busca el id en la base de datos
        usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",mail_user).get()
        for clave in usuario_doc:
            key=clave.id
        clave=clave_dict
        datos={clave:nuevo_dato}
        #actualiza los datos
        db.collection('usuarios').document(key).update(datos)
        Mensaje="Se actulizo "+clave_dict
        
    return Mensaje
"""
def Devolver_datos(mail_user: str):
    Mensaje=""
    key=""
    usuario_doc=[]
    Mensaje+=validar_mail(mail_user)
    #si no hay mensajes de error consulta a la base de datos
    if(Mensaje==""):
        #busca el id en la base de datos
        usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",mail_user).get()
        for clave in usuario_doc:
            key=clave.id
    usuario_doc_completo=db.collection('usuarios').document(key).get()
    usuario_diccionario=usuario_doc_completo.to_dict()
    return usuario_diccionario

@app.get("/")

async def root():
    
    return {"Presentacion": "Api desarrollada para MyEmotion"}

#pide dos datos usuario y contraseña
#Busca usuario y contraseña
#devuelve un mensaje segun el resultado de la busqueda.
@app.post("/Login/")
def Busca_usuario_y_contrasenia(user_date:inicio_sesion):
    #jsonable_user_encoded = jsonable_encoder(user_date)
    #mail=jsonable_user_encoded['Mail'] 
    
    Mensaje = "No coinciden"
    usuario_doc=[]
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
def Registra_Datos_de_Usuario(user_date:registro_usuario):
    usuario_doc=[]
    Mensaje=""
    
    mail_user=user_date.Mail
    Mensaje+=validar_mail(mail_user)
   
    Edad_user=int(user_date.Edad)
    Mensaje+=validar_edad(Edad_user)
    
    Nombre_de_usuario_user=user_date.Nombre_de_usuario
    Mensaje+=validar_Apellido_o_Nombre(Nombre_de_usuario_user)
    
    Apellido_de_usuario_user=user_date.Apellido_de_usuario
    Mensaje+=validar_Apellido_o_Nombre(Apellido_de_usuario_user)
    if(Mensaje==""):
        usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",user_date.Mail).get()
        
        if usuario_doc!=[]:
            Mensaje="Usuario existe"
        else:
            datos={"Datos_registro":{"Mail": user_date.Mail,"Edad": user_date.Edad,"Apellido_de_usuario": user_date.Apellido_de_usuario,"Nombre_de_usuario": user_date.Nombre_de_usuario,"Contrasenia": user_date.Contrasenia,"Genero": user_date.Genero,"Ciudad": user_date.Ciudad,"Fecha de registro":datetime.now()}}
            
            
            db.collection('usuarios').document().set(datos,merge=True)
            Mensaje="Se registro correctamente"
    return {"Mensaje":Mensaje}


@app.post("/Perfil/Apellido")
def Perfil_Nuevo_Apellido(Mail:str,Nuevo_Apellido:str):
    Mensaje=""
    Mensaje=validar_Apellido_o_Nombre(Nuevo_Apellido,"last_name_de_usuario")
    if(Mensaje==""):
        Mensaje=Reemplaza_datos(Mail, "Apellido_de_usuario", Nuevo_Apellido)

    return {"Mensaje": Mensaje}

@app.post("/Perfil/Nombre")
def Perfil_Nuevo_Nombre(Mail:str,Nuevo_Nombre:str):
    Mensaje=""
    Mensaje=validar_Apellido_o_Nombre(Nuevo_Nombre,"Nombre_de_usuario")
    if(Mensaje==""):
        Mensaje=Reemplaza_datos(Mail, "Nombre_de_usuario", Nuevo_Nombre)

    return {"Mensaje": Mensaje}


@app.post("/Perfil/Edad")
def Perfil_Nueva_edad(Mail:str,Nueva_edad:int):
    Mensaje=""

    Mensaje+=validar_edad(Nueva_edad) 
    if(Mensaje==""):
        Mensaje=Reemplaza_datos(Mail, "Edad", Nueva_edad)
    return {"Mensaje": Mensaje}   

@app.post("/Perfil/Genero")
def Perfil_Nuevo_Genero(Mail:str,Nuevo_Genero:str):
    Mensaje=""

    Mensaje=Reemplaza_datos(Mail, "Genero", Nuevo_Genero)

    return {"Mensaje": Mensaje}   

@app.post("/Modulos/Reconocimiento emocional")
def Editar_Modulo_Reconocimiento_emocional(Mail:str,Nueva_Ciudad:str):
    Mensaje=""
    Mensaje=Reemplaza_datos(Mail, "Ciudad", Nueva_Ciudad)
    
    return {"Mensaje": Mensaje}   


@app.get("/Devolver_todo/")
def Devolver_datos_del_usuario(Mail:str):
    datos=Devolver_datos(Mail)
    return {"Diccionario de datos del usuario": datos}
  
if __name__ == "__main__":
    uvicorn.run("index:app",reload=True)