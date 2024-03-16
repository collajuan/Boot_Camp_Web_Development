//Inicio del programa ambos con imagen en 6
//busco dos numeros random para player1 y player2

//le asigno la imagen segun lo que salio
//cambio el titulo de la web segun el ganador (mayor random dice)

let random1 = getRandomNumber(6);
let random2 = getRandomNumber(6);


document.querySelector(".img1").setAttribute("src",`./images/dice${random1}.png`);
document.querySelector(".img2").setAttribute("src",`./images/dice${random2}.png`);

if (random1>random2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (random1<random2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "No Winner!";
}

//function changeWiner()
function getRandomNumber(num){
    return Math.floor(Math.random()*num)+1;
}