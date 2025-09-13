let player1=document.getElementById("text1")
let set=["rock","paper","scissors"]
let player2=document.getElementById("text2")
let set2=["rock","paper","scissors"]
let score=document.getElementById("score")

  let button=document.getElementById("button")
    


function shuffel(){
let choice = set[Math.floor(Math.random() * set.length)];
let choice2 = set2[Math.floor(Math.random() * set2.length)];

     if(choice=="rock"){
        player1.textContent="🗿"
    }
    else if(choice=="paper"){
     player1.textContent="📃"
    }
    else{
        player1.textContent="✂️"
    }

    if(choice2=="rock"){
        player2.textContent="🗿"
    }
    else if(choice2=="paper"){
     player2.textContent="📃"
    }
    else{
        player2.textContent="✂️"
    }
    if(choice==choice2){
      score.textContent="Draw!"

    }
    else if (
    (choice === "rock" && choice2 === "scissors") ||
    (choice === "paper" && choice2 === "rock") ||
    (choice === "scissors" && choice2 === "paper")
  ) {
    score.textContent = "Player 1 Wins!";}
   else {
    score.textContent = "Player 2 Wins!";
  }
    


}
button.addEventListener("click",shuffel)
