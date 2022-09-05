// estas funciones son de ejemplo

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
        if(rolSeleccionado=="All") { return campeon.info.difficulty == Number(difficultySeleccionado)}
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

// export const filterByDifficulty
// export const filterDificultad=(difficultySeleccionado, campeones)=>{
//     return campeones.filter(campeon =>{       
//     //return campeon.info.difficulty == Number (difficultySeleccionado)
//     if(difficultySeleccionado == "All"){
//         return true
//     }
//     else {
//         return campeon.info.difficulty == Number(difficultySeleccionado)
//     }
// })
// }