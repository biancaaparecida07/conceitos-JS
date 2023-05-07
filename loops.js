console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 16;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

let destinoExiste = false;
const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);
let contador = 0;

while (contador < 3){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe!!!")
        destinoExiste = true;
        break;
    }
    contador += 1;
}

// for(let cont = 0;cont<3;cont++){
//      if(listaDeDestinos[contador] == destino){
//         console.log("Destino existe!!!")
//         destinoExiste = true;
//         break;
//     }
// }

console.log("Destino existe: ", destinoExiste)

if (podeComprar && destinoExiste){
    console.log("Boa Viagem!!!")
} else{
    console.log("Desculpa, tivemos um erro!!!")
}