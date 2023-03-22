#librerias para que funcione la API
#import uvicorn
#from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel
import os
#librerias para que funcione firebase
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime

from funciones.funciones_de_consulta_a_firestone import *
from funciones.funciones_de_validacion import *

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
    Departamento: str

cred = credentials.Certificate("serviceAccountKey.json")
app = firebase_admin.initialize_app(cred)

app = FastAPI()

@app.get("/")

async def root():
    
    return {"Presentacion": "Api desarrollada para MyEmotion"}



@app.get("/Devolver_todo/")
def Devolver_datos_del_usuario(Mail:str):
    
    #busca los datos del usuario 
    datos=Devolver_datos(Mail)

    return {"Mensaje": datos}
@app.get("/Modulo/Habilidades_socioemocionales/")
def Devolver_datos_del_usuario():
    
    #busca el modulo de Habilidades_socioemocionales 
    modulo=Devolver_modulo("Habilidades_socioemocionales")

    return {"Mensaje": modulo}

@app.get("/Modulo/Reconocimiento_emocional/")
def Devolver_datos_del_usuario():
    
    #busca el modulo de Reconocimiento_emocional 
    modulo=Devolver_modulo("Reconocimiento_emocional")

    return {"Mensaje": modulo}

@app.get("/Modulo/salud_mental/")
def Devolver_datos_del_usuario():
    
    #busca el modulo de salud_mental 
    modulo=Devolver_modulo("salud_mental")

    return {"Mensaje": modulo}

#pide dos datos usuario y contraseña
#Busca usuario y contraseña
#devuelve un mensaje segun el resultado de la busqueda.
@app.post("/Login/")
def Busca_usuario_y_contrasenia(user_date:inicio_sesion):
    #inicia variable Mensaje
    Mensaje=""
    #inicia variable mail_user
    mail_user=user_date.Mail
    #inicia variable contrasenia_user
    contrasenia_user=user_date.Contrasenia
    #busca errores en el mail ingresado
    Mensaje+=validar_mail(mail_user)
    #si no hay mensajes de error consulta a la base de datos
    if(Mensaje==""):
        Mensaje=buscar_usuario_contrasenia(mail_user,contrasenia_user)
    
    return {"Mensaje":Mensaje}


#pide 1 dato Mail
#registra los datos junto con la fecha actual
#devuelve un mensaje segun el resultado del registro
@app.post("/Registro/google")
def Registra_Datos_de_Usuario_google(Mail:str):
    #inicia la variable Mensaje
    Mensaje=""
    #busca errores en el mail ingresado
    Mensaje+=validar_mail(Mail)
    if(Mensaje==""):
        #registra el usuario
        Mensaje=registrar_usuario_con_google(Mail)
        
    return {"Mensaje":Mensaje}


#pide 7 datos Mail, Edad, Nombre_de_usuario, Apellido_de_usuario, Contrasenia, Genero, Ciudad
#registra los datos junto con la fecha actual
#devuelve un mensaje segun el resultado del registro
@app.post("/Registro/")
def Registra_Datos_de_Usuario(user_date:registro_usuario):
    #inicia la variable Mensaje
    Mensaje=""
    #busca errores en el mail ingresado
    mail_user=user_date.Mail
    Mensaje+=validar_mail(mail_user)
    #busca errores en la edad ingresada
    Edad_user=int(user_date.Edad)
    Mensaje+=validar_edad(Edad_user)
    #busca errores en el Nombre_de_usuario ingresado
    Nombre_de_usuario_user=user_date.Nombre_de_usuario
    Mensaje+=validar_Apellido_o_Nombre(Nombre_de_usuario_user,"Nombre_de_usuario")
    #busca errores en el Apellido_de_usuario ingresado
    Apellido_de_usuario_user=user_date.Apellido_de_usuario
    Mensaje+=validar_Apellido_o_Nombre(Apellido_de_usuario_user,"last_name_de_usuario")
    ##inicia la variable Contrasenia_user
    Contrasenia_user=user_date.Contrasenia
    ##inicia la variable Genero_user
    Genero_user=user_date.Genero
    ##inicia la variable Departamento_user
    Departamento_user=user_date.Departamento
    #si no hay errores en el ingreso de datos el mensaje esta vacio
    if(Mensaje==""):
        #registra el usuario
        Mensaje=registrar_usuario(mail_user,Edad_user,Nombre_de_usuario_user,Apellido_de_usuario_user,Contrasenia_user,Genero_user,Departamento_user)
        
    return {"Mensaje":Mensaje}


@app.post("/Perfil/Apellido")
def Perfil_Nuevo_Apellido(Mail:str,Nuevo_Apellido:str):
    #inicia la variable Mensaje
    Mensaje=""
    #busca errores en el mail ingresado
    Mensaje+=validar_mail(Mail)
    #busca errores en el Apellido_de_usuario ingresado
    Mensaje+=validar_Apellido_o_Nombre(Nuevo_Apellido,"last_name_de_usuario")
    #si no hay errores en el ingreso de datos el mensaje esta vacio
    if(Mensaje==""):
        #reemplaza el dato
        Mensaje=Reemplaza_datos(Mail, "Apellido_de_usuario", Nuevo_Apellido)

    return {"Mensaje": Mensaje}

@app.post("/Perfil/Nombre")
def Perfil_Nuevo_Nombre(Mail:str,Nuevo_Nombre:str):
    #inicia la variable Mensaje
    Mensaje=""
    #busca errores en el mail ingresado
    Mensaje+=validar_mail(Mail)
    #busca errores en el Nombre_de_usuario ingresado
    Mensaje=validar_Apellido_o_Nombre(Nuevo_Nombre,"Nombre_de_usuario")
    #si no hay errores en el ingreso de datos el mensaje esta vacio
    if(Mensaje==""):
        #reemplaza el dato
        Mensaje=Reemplaza_datos(Mail, "Nombre_de_usuario", Nuevo_Nombre)

    return {"Mensaje": Mensaje}
 
@app.post("/Perfil/Edad")
def Perfil_Nueva_edad(Mail:str,Nueva_edad:int):
    #inicia la variable Mensaje
    Mensaje=""
    #busca errores en el mail ingresado
    Mensaje+=validar_mail(Mail)
    #busca errores en la edad ingresada
    Mensaje+=validar_edad(Nueva_edad) 
    #si no hay errores en el ingreso de datos el mensaje esta vacio
    if(Mensaje==""):
        #reemplaza el dato
        Mensaje=Reemplaza_datos(Mail, "Edad", Nueva_edad)
    return {"Mensaje": Mensaje}   

@app.post("/Perfil/Genero")
def Perfil_Nuevo_Genero(Mail:str,Nuevo_Genero:str):
    #inicia la variable Mensaje
    Mensaje=""
    #busca errores en el mail ingresado
    Mensaje+=validar_mail(Mail)
    #si no hay errores en el ingreso de datos el mensaje esta vacio
    if(Mensaje==""):
        #reemplaza el dato
        Mensaje=Reemplaza_datos(Mail, "Genero", Nuevo_Genero)

    return {"Mensaje": Mensaje}   

@app.post("/Perfil/Departamento")
def Perfil_Nuevo_Departamento(Mail:str,Nuevo_Departamento:str):
    #inicia la variable Mensaje
    Mensaje=""
    #busca errores en el mail ingresado
    Mensaje+=validar_mail(Mail)
    #si no hay errores en el ingreso de datos el mensaje esta vacio
    if(Mensaje==""):
        #reemplaza el dato
        Mensaje=Reemplaza_datos(Mail, "Departamento", Nuevo_Departamento)
   
    return {"Mensaje": Mensaje}
                
@app.post("/Modulos/Avatar")
def Editar_Avatar(Mail:str,Avatar:str):
    #inicia la variable Mensaje
    Mensaje=""
    #busca errores en el mail ingresado
    Mensaje+=validar_mail(Mail)
    #si no hay errores en el ingreso de datos el mensaje esta vacio
    if(Mensaje==""):
        #reemplaza el dato
        Mensaje=Reemplaza_datos(Mail, "Avatar_img", Avatar)
    
    return {"Mensaje": Mensaje}   



"""   
@app.post("/Modulos/Reconocimiento emocional")
def Editar_Modulo_Reconocimiento_emocional_version_Beta(Mail:str,update_modulo:str):
    Mensaje="En construccion"+ Mail + update_modulo
    
    return {"Mensaje": Mensaje}   
"""  
def create_app():
    from waitress import serve
    PORT = int(os.environ.get("PORT",8000))
    serve(app, host="0.0.0.0", port=PORT)

if __name__ == "__main__":
    create_app()
