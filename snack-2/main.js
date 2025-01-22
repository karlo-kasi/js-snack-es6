/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/



// creo un ciclo for per prendere tutti gli elementi dell'array 


const squadreSelezionate = []

let squadre = [
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 }
  ];

  for (let i = 0; i < squadre.length; i++){

       punteggio = (Math.floor((Math.random() * 20) + 1))
       falliSubiti = (Math.floor((Math.random() * 20) + 1))
       
       squadre[i].falliSubiti = falliSubiti
       squadre[i].punti = punteggio

  }

  console.log(squadre)

  for (let i = 0; i < squadre.length; i++ ){
    
    
       squadreSelezionate.push(squadre[i].nome, squadre[i].falliSubiti)


  }

  console.log(squadreSelezionate)

