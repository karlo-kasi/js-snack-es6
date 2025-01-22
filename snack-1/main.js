/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

let bici = [
    { nome: "Bianchi", peso: 7.2 },
    { nome: "Pinarello", peso: 8.1 },
    { nome: "Specialized", peso: 6.8 },
    { nome: "Trek", peso: 7.5 },
    { nome: "Cannondale", peso: 7.1 },
    { nome: "Scott", peso: 6.9 },
    { nome: "Giant", peso: 8.0 }
];
  
  
  let pesoMinore = bici[0].peso


  for (let i = 1; i < bici.length; i++){
     

     if (pesoMinore >= bici[i].peso){
       leggera = bici[i]
       
     }

}      
console.log(leggera)
    