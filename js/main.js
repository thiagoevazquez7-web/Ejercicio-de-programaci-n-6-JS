/* EJERCICIO A */

console.warn('Ejercicio A')

var gatos = 10



while(gatos > 0) {
    console.log('😺')
    --gatos
    if(gatos > 0){
       console.log('😸')
        --gatos 
    }
    if(gatos > 0){
      console.log('😹')
        --gatos  
    }
}



/* EJERCICIO B */

console.warn('Ejercicio B')

var CantidadDeGatos = 2
var pasos = 5



while(CantidadDeGatos > 0) {
    CdeGatos = '🐈'
    var totalPasos = ''

    for(pisada = 0; pisada < pasos; pisada++){
        totalPasos += '🐾'
    }
    
    var total = CdeGatos + totalPasos
    console.log(total)
    
    --CantidadDeGatos
}




/* EJERCICIO C */

console.warn('Ejercicio C')

var CantidadDeGatos = 10
var pasos = 5



while(CantidadDeGatos > 0) {
    CdeGatos = '🐈'

    
    var totalPasos = ''

    for(pisada = 0; pisada < pasos; pisada++){
        totalPasos += '🐾'
    }

    if(CantidadDeGatos % 2){
        var cuadrado = '⬛'

        var total = CdeGatos + cuadrado + totalPasos
        console.log(total)
    }

    else {
        var total = CdeGatos + totalPasos
        console.log(total)
    }
    
    --CantidadDeGatos
}
