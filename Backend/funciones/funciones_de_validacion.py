
#librerias para que funcione firebase
from firebase_admin import firestore
from datetime import datetime

#####funciones de validacion de datos####

#recibe un mail
#verifica que el mail sea correcto 
#devuelve un mensaje
def validar_mail(mail_user):
    #inicia la variable mensaje 
    mensaje=""
    #si el mail esta vacio el mensaje es Ingresar mail
    if(mail_user=="string")or (mail_user==""):
        mensaje="Ingresar mail "
    #sino comprueba una lista que contiene "@",".com"
    else:
        lis_errores_MESAJE=["'Falta arroba' ","'Falta .com'"]
        lis_errores=["@",".com"]
        #recorre el string revisando los caracteres
        for carac in mail_user:
            #si encuentra un espacio en el mail el mensaje es Hay espacios vacios
            if carac == ' ':
                mensaje="'Hay espacios vacios' "
        #recorre una lista de errores
        for indice, palabra_str in enumerate (lis_errores):
            print(palabra_str)
            #busca en la lista
            posicion = mail_user.find(palabra_str)
            #si no encuentra "@",".com" en el mail 
            if(posicion==-1):
                mensaje+=lis_errores_MESAJE[indice]   
                #devuelve un mensaje 'Falta arroba' ","'Falta .com'

    return mensaje

#recibe la edad
#verifica que la edad este entre 6 y 100 
#devuelve un mensaje
def validar_edad(Edad_user):
    #inicia la variable mensaje 
    mensaje=""
    #si la edad no esta en el rango de 6 a 100 años
    if(Edad_user<6 or Edad_user>100 ):
        #el mensaje es Edad invalida
        mensaje="'Edad invalida' "
    #retorna el mensaje
    return mensaje
#recibe el nombre o apellido
#
#devuelve un mesaje de error para el nombre o apellido
def mensaje_error(dato_persona):
    #si el dato es apellido
    if(dato_persona=="last_name_de_usuario"):
        #el mensaje es Apellido invalido
        mensaje="'Apellido invalido' "
    #sino es apellido es nombre
    else:
        #el mensaje es Nombre invalido
        mensaje="'Nombre invalido' "
    #retorna el mensaje
    return  mensaje

#recibe Apellido o Nombre
#verifico que no haya numero o caracteres en el nombre
#devuelve un mensaje
def validar_Apellido_o_Nombre(Nombre_de_usuario_user: str, dato_persona):
    #inicia la variable mensaje 
    mensaje=""
    #si hay caracteres que no sean letras
    Nombre_de_usuario_user_sin_espacios=Nombre_de_usuario_user.replace(" ","")
    if not(Nombre_de_usuario_user_sin_espacios.isalpha()):
        #el mensaje es Apellido invalido o Nombre invalido
        mensaje=mensaje_error(dato_persona)
        
    return mensaje 

