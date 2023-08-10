var randomNumber1 ;
randomNumber1 = Math.floor((Math.random() * 6) + 1);


if (randomNumber1 === 1)
{
    document.querySelector(".dice img").setAttribute("src", "images/dice1.png");
   
}
else if (randomNumber1 === 2)
{
   document.querySelector(".dice img").setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 === 3)
{
    document.querySelector(".dice img").setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 === 4)
{
    document.querySelector(".dice img").setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 === 5)
{
    document.querySelector(".dice img").setAttribute("src", "images/dice5.png");
}
else 
{
    document.querySelector(".dice img").setAttribute("src", "images/dice6.png");
}

//secound dice
var randomNumber2 ;
randomNumber2 = Math.floor((Math.random() * 6) + 1);


if (randomNumber2 === 1)
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
   
}
else if (randomNumber2 === 2)
{
   document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
}
else if (randomNumber2 === 3)
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
}
else if (randomNumber2 === 4)
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
}
else if (randomNumber2 === 5)
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
}
else 
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].textContent ="player1 wins 🚩";
}
else if (randomNumber1 < randomNumber2){
    document.getElementsByTagName("h1")[0].textContent ="player2 wins 🚩";
}
else {
    
        document.getElementsByTagName("h1")[0].textContent ="It's a Draw";
    }
