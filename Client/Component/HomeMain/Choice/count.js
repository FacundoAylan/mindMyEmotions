export const Count = ({pregunta,respuesta}) => {
  if(pregunta ===1 && respuesta==='a'){
    return 3
  }
  if(pregunta ===1 && respuesta==='c'){
    return 4
  }
//---------------------------------------------------
  if(pregunta ===2 && respuesta==='b'){
    return 1
  }
  if(pregunta ===2 && respuesta==='c'){
    return 3
  }
  if(pregunta ===2 && respuesta==='d'){
    return 4
  }
//------------------------------------------
  if(pregunta ===3 && respuesta==='b'){
    return 2
  }
  if(pregunta ===3 && respuesta==='c'){
    return 4
  }
//--------------------------------------------
  if(pregunta ===4 && respuesta==='a'){
    return 4
  }
  if(pregunta ===4 && respuesta==='c'){
    return 1
  }
  if(pregunta ===4 && respuesta==='d'){
    return 2
  }
//--------------------------------------------
  if(pregunta ===5 && respuesta==='b'){
    return 4
  }
  if(pregunta ===5 && respuesta==='c'){
    return 2
  }
//---------------------------------------------
  if(pregunta ===6 && respuesta==='b'){
    return 2
  }
  if(pregunta ===6 && respuesta==='c'){
    return 4
  }
//---------------------------------------------------
  if(pregunta ===7 && respuesta==='a'){
    return 2
  }
  if(pregunta ===7 && respuesta==='c'){
    return 4
  }
//------------------------------------------------
  if(pregunta ===8 && respuesta==='b'){
    return 2
  }
  if(pregunta ===8 && respuesta==='c'){
    return 4
  }
  if(pregunta ===8 && respuesta==='d'){
    return 1
  }else{
    return 0
  }
}