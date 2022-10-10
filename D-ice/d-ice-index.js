var randomNumber1 = Math.floor( Math.random() * 6 ) + 1; //dado 1
var randomNumber2 = Math.floor( Math.random() * 6 ) + 1; //dado 2
var randomDice1 = "dice"+ randomNumber1 +".png"; //nombre imagen d1
var randomDice2 = "dice"+ randomNumber2 +".png"; //nombre imagen d2
var randomImage1 = "images/"+ randomDice1; //ruta
var randomImage2 = "images/"+ randomDice2;

document.querySelectorAll ("img")[0].setAttribute ("src",randomImage1);
document.querySelectorAll ("img")[1].setAttribute ("src",randomImage2);

//Game
if(randomNumber1 > randomNumber2){
    document.querySelector("h4").innerHTML = "Winer... Player 1 !";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h4").innerHTML = "Winer... Player 2 !";
}else{
    document.querySelector("h4").innerHTML = "Draw !";
}