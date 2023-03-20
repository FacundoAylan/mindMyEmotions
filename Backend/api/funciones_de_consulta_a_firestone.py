
#librerias para que funcione firebase
from firebase_admin import firestore
from datetime import datetime

from api.funciones_de_validacion import *

def registrar_usuario_con_google(mail_user):
 #inicia la variable Mensaje
    Mensaje =""
    #inicia la lista usuario_doc
    usuario_doc=[]
    #inicia la configuracion de firestone
    db = firestore.client()
    usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",mail_user).get()
    
    if (usuario_doc!=[]):
        #mensaje es Usuario existe
        Mensaje="Usuario existe"
    else:
        datos_modulo1={"module": "Reconocimiento emocional","topics": [{"name":"Test inicial","complete": True}, { "name":"Identificar",  "complete": False}, { "name":"Nombrar ", "complete": False}, {"name":"Entender","complete": False}, {"name":"Actuar","complete": False}],"complete": False}
        datos_modulo2={"module": "Modulo 2","topics": [{"name":"Test inicial","complete": True}, {"name":"Identificar","complete": False}, {"name":"Nombrar ","complete": False}, {"name":"Entender","complete": False}, {"name":"Actuar","complete": False}],"complete": False}
        datos_modulo3={"module": "Modulo 3","topics": [{"name":"Test inicial","complete": True}, {"name":"Identificar","complete": False}, {"name":"Nombrar ","complete": False}, {"name":"Entender","complete": False}, {"name":"Actuar","complete": False}],"complete": False}
        datos={"Datos_registro":{"Mail": mail_user,"Edad": "","Apellido_de_usuario": "","Nombre_de_usuario": "","Contrasenia": "","Genero": "","Departamento": "","Fecha de registro":datetime.now(),"Avatar_img":"img"},"Reconocimiento_emocional":datos_modulo1,"modulo_2":datos_modulo2,"modulo_3":datos_modulo3}

        #crea un nuevo id con los nuevos datos 
        db.collection('usuarios').document().set(datos,merge=True)
        #mensaje es Se registro correctamente
        Mensaje="Se registro correctamente"

    return Mensaje
def registrar_usuario(mail_user,Edad_user,Nombre_de_usuario_user,Apellido_de_usuario_user,Contrasenia_user,Genero_user,Departamento_user):
    #inicia la variable Mensaje
    Mensaje =""
    #inicia la lista usuario_doc
    usuario_doc=[]
    #inicia la configuracion de firestone
    db = firestore.client()
    usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",mail_user).get()
    
    if (usuario_doc!=[]):
        #mensaje es Usuario existe
        Mensaje="Usuario existe"
    else:
        datos_modulo1={"module": "Reconocimiento emocional","topics": [{"name":"Test inicial","complete": True}, { "name":"Identificar",  "complete": False}, { "name":"Nombrar ", "complete": False}, {"name":"Entender","complete": False}, {"name":"Actuar","complete": False}],"complete": False}
        datos_modulo2={"module": "Modulo 2","topics": [{"name":"Test inicial","complete": True}, {"name":"Identificar","complete": False}, {"name":"Nombrar ","complete": False}, {"name":"Entender","complete": False}, {"name":"Actuar","complete": False}],"complete": False}
        datos_modulo3={"module": "Modulo 3","topics": [{"name":"Test inicial","complete": True}, {"name":"Identificar","complete": False}, {"name":"Nombrar ","complete": False}, {"name":"Entender","complete": False}, {"name":"Actuar","complete": False}],"complete": False}
        datos={"Datos_registro":{"Mail": mail_user,"Edad": Edad_user,"Apellido_de_usuario": Apellido_de_usuario_user,"Nombre_de_usuario": Nombre_de_usuario_user,"Contrasenia": Contrasenia_user,"Genero": Genero_user,"Departamento": Departamento_user,"Fecha de registro":datetime.now(),"Avatar_img":"img"},"Reconocimiento_emocional":datos_modulo1,"modulo_2":datos_modulo2,"modulo_3":datos_modulo3}

        #crea un nuevo id con los nuevos datos 
        db.collection('usuarios').document().set(datos,merge=True)
        #mensaje es Se registro correctamente
        Mensaje="Se registro correctamente"

    
    return Mensaje
def buscar_usuario_contrasenia(mail_user, contrasenia_user):
    #inicia la variable Mensaje
    Mensaje = ""
    #inicia la lista usuario_doc
    usuario_doc=[]
    
    #inicia la configuracion de firestone
    db = firestore.client()
    #busca el id en la base de datos
    usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",mail_user).get()
    #si el usuario no se encuentra el mensaje es Usuario y/ contraseña no coinciden
    if usuario_doc==[]:
        Mensaje="Usuario y/ contraseña no coinciden"
    else:
        #recorre la lista usuario_doc
        for clave in usuario_doc:
            # Almacena la clave del usuario en Key
            key=clave.id
        #crea la consulta para obtener todos lo datos
        usuario_doc_completo=db.collection('usuarios').document(key).get()
        #convierte la consulta a diccionario
        usuario_diccionario=usuario_doc_completo.to_dict()
        #obtiene los datos dentro de Datos_registro
        consultar_datos=usuario_diccionario['Datos_registro']
        #almacena la clave del usuario en la base de datos
        clave=consultar_datos['Contrasenia']
        #compara si la clave es la misma a la ingresada
        if consultar_datos['Contrasenia']== contrasenia_user:
            #mensaje es Usuario y/ contraseña ingresados correctamente
            Mensaje="Usuario y/ contraseña ingresados correctamente"
        else:
            #sino Contraseña ingresada incorrectamente
            Mensaje="Contraseña ingresada incorrectamente"

    return mensaje


#recibe el mail, la clave del dato a atualizar y el nuevo dato
#reemplaza dato de perfil 
#devuelve un mensaje 
def Reemplaza_datos(mail_user, clave_dict, nuevo_dato):
    #inicia la variable mensaje 
    Mensaje=""
    #inicia la variable key 
    key=""
    #inicia la lista usuario_doc
    usuario_doc=[]
    #verifica si el formato del mail es correcto y que el dato mail no este vacio
    Mensaje+=validar_mail(mail_user)
    #si es edad paso el dato a numero entero
    if(clave_dict=="Edad"):
        nuevo_dato=int(nuevo_dato)
    #si no hay mensajes de error consulta a la base de datos
    if(Mensaje==""):
        #inicia la configuracion de firestone
        db = firestore.client()
        #busca el id en la base de datos
        usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",mail_user).get()
        #recorre la lista usuario_doc
        for clave in usuario_doc:
            # Almacena la clave del usuario en Key
            key=clave.id
        #crea la consulta dentro del diccionario clave: Datos_registro
        clave="Datos_registro."+clave_dict
        #Crea un diccionario {clave:valor}
        datos={clave:nuevo_dato}
        #actualiza los datos
        db.collection('usuarios').document(key).update(datos)
        #mensaje va a ser igual a Se actulizo 
        Mensaje="Se actulizo "+clave_dict
        
    return Mensaje

#recibe el mail, la clave del dato a atualizar y el nuevo dato
#reemplaza dato de perfil 
#devuelve un mensaje 
def Editar_datos_modulo(mail_user: str, clave_dict: str, nuevo_dato:str):
    Mensaje=""
    key=""
    usuario_doc=[]
    Mensaje+=validar_mail(mail_user)

    #si no hay mensajes de error consulta a la base de datos
    if(Mensaje==""):
        #inicia la configuracion de firestone
        db = firestore.client()
        #busca el id en la base de datos
        usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",mail_user).get()
        for clave in usuario_doc:
            key=clave.id
        #crea la consulta dentro del diccionario segun la clave:clave_dict paramentro de la funcion
        clave=clave_dict
        #Crea un diccionario {clave:valor}        
        datos={clave:nuevo_dato}
        #actualiza los datos
        db.collection('usuarios').document(key).update(datos)
        Mensaje="Se actulizo "+clave_dict
        #mensaje va a ser igual a Se actulizo 

    return Mensaje

#recibe el mail
#busca los datos segun el mail del usuario
#devuelve todos los datos 
def Devolver_datos(mail_user: str):
    Mensaje=""
    key=""
    usuario_doc=[]
    Mensaje+=validar_mail(mail_user)
    #si no hay mensajes de error consulta a la base de datos
    if(Mensaje==""):
        #inicia la configuracion de firestone
        db = firestore.client()
        #busca el id en la base de datos
        usuario_doc=db.collection('usuarios').where("Datos_registro.Mail","==",mail_user).get()
        for clave in usuario_doc:
            key=clave.id
    usuario_doc_completo=db.collection('usuarios').document(key).get()
    usuario_diccionario=usuario_doc_completo.to_dict()
    usuario_diccionario['Datos_registro'].pop('Contrasenia')
    return usuario_diccionario