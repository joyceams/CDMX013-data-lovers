// estas funciones son de ejemplo

export const filterByRol = (rolSeleccionado, campeones) => {
  let todosLosRoles=[]
    if(rolSeleccionado == "All"){
        todosLosRoles = campeones 
    }
    else{
        todosLosRoles = campeones.filter(campeon =>{
        let resultado = false
            for (let j=0; j <campeon.tags.length; j++) {
                if( campeon.tags[j] == rolSeleccionado) {
                    resultado = true
                    break
                }
            } 
            return resultado
    })
  }
  return todosLosRoles
}

//export const filterByDifficulty
