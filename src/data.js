export const filterByRol = (campeones, rolSeleccionado, difficultySeleccionado) => {
    console.log("================");
    console.log(rolSeleccionado);
    console.log(difficultySeleccionado);
    console.log("================");
    let todosLosRoles=[]
    if(rolSeleccionado == "All" && difficultySeleccionado=="All"){
        todosLosRoles = campeones 
    }
    else{
        todosLosRoles = campeones.filter(campeon =>{
        let resultado = false
        if(rolSeleccionado=="All") {
          return campeon.info.difficulty == Number(difficultySeleccionado)}
        else if(difficultySeleccionado=="All")
        {
            for (let j=0; j <campeon.tags.length; j++) {
                if(campeon.tags[j] == rolSeleccionado) {
                    resultado = true
                    break
                }
            } 
        }
        else {
            for (let j=0; j <campeon.tags.length; j++) {
                if( (campeon.tags[j] == rolSeleccionado) && (campeon.info.difficulty == Number(difficultySeleccionado))) {
                    resultado = true
                    break
                }
            }
        }
        return resultado
    })
    }
    return todosLosRoles
}

export const sortChampionsAscend = (campeones) => {
  campeones.sort ((a, b) => {
    if (a.name < b.name) {
        return -1;
    }else 
        return 1;
    }
)}

export const sortChampionsDescend= (campeones) => {
  campeones.sort ((a, b) => {
    if (a.name > b.name) {
         return -1;
    }else 
        return 1;
    }
)}