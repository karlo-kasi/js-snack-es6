/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).
*/


//creo un ciclo
let lista = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara']

let newArray =[]

function myFucntion (listaNuova, a , b ){

    for (let i = 0; i < lista.length; i++){
        
        // se indice è maggiore uguale al parametro a e l'indice b è minore o uguale a l'indice 
        if ( i > (a - 1) && i < ( b - 1)){
           listaNuova.push(lista[i])
           
        } 

    }
    console.log(newArray)
}

myFucntion (newArray, 1 , 5)