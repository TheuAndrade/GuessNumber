'use strict';
enterKey()
let n = randomNumber()
document.querySelector(".highscore").textContent = localStorage.getItem("highScore")

function randomNumber(){
    
    let num = Math.floor(Math.random() * 20)
   
    if(num < 1)
        num += 1
   
    return num
}

function getTryNumber(){
    document.querySelector('.message').innerText = ""
    let number =  validNumber()
    console.log(n)
    let hints = document.querySelector('#hint')
    let score = document.querySelector('.score')
    
    let val = score.textContent
  
    
    
   
    if(n > number){
    hints.innerHTML = "Mais"
    score.innerHTML = val - 1
    let change = score.textContent
    change = parseInt(change)
    
    if(change <= 0){
        winGame(false)
     }
    
    }
    else if(n < number){
    hints.innerHTML = "Menos"
    score.innerHTML = val - 1
    let change = score.textContent
    change = parseInt(change)
    
    if(change <= 0){
         winGame(false)
     }
    }
    else if(n == number){
    hints.innerHTML = "Acertou 🙌"
    document.querySelector('.number').innerHTML = number
    let change = score.textContent
        winGame(true)
        getHighscore()
     
    }
    
}
function winGame(game){
    let backgloundColor = document.querySelector('body')
    
    if(game == true)
    {
        backgloundColor.style.backgroundColor = "green"
       

}
    else if(game == false)
    {
        backgloundColor.style.backgroundColor = "red"}

}

function getHighscore(){
    let highScore = document.querySelector('.highscore')
    let number = document.querySelector('.score').textContent
  
    if(number > highScore.textContent){
        localStorage.setItem("highScore",number)
        highScore.textContent = number
    }
 
    
}

function playAgain(){
    document.querySelector('.score').textContent = 20 
    document.querySelector('.guess').value = 0
    document.querySelector('body').style.backgroundColor = "rgb(34, 34, 34)"
    document.querySelector(".message").innerText = "Start guessing ..."
    document.querySelector('#hint').innerHTML = "Guess My Number!"
    document.querySelector('.number').innerHTML = '?'
    n = randomNumber()
    
}


function validNumber(){
   let num =  document.querySelector('.guess').value
   let check = parseInt(num)
  console.log(check)
  /* 
  if(check >= 21 || check <= 0 ){
        console.log("Entou")
        document.querySelector(".message").innerText = "Numero Invalido"
    }
    else{
        document.querySelector(".message").innerText = ""
        return check 
    }
    */
   if(check >= 1 && check <= 20){
    return check
   }
    else{
    document.querySelector('.message').innerText = "Invalido"
    }
   }


function some(){
    
    getTryNumber()
   
}

function enterKey(){
    let listen = document.querySelector("body");
listen.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getTryNumber()
  }
})
}

function deletScore(){
    let val = document.querySelector('.highscore').innerHTML = 0
    console.log(val)
    localStorage.setItem('highScore',val)
}