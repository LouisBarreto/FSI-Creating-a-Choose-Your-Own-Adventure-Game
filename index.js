//Your Code here
const name = window.prompt('What is your name Knight?')
const firstanswer  = window.prompt('Do you head left or right?')
console.log(firstanswer);



//if user picked left..
if (firstanswer === "left") {
    console.log("user picked left");

    const secondAnswer = window.prompt(` ${name}  chose to go left, you run into a Dragon! Do you go run or fight?`)
    console.log (secondAnswer);
    
    if (secondAnswer === 'run'){
        window.alert("Congrats YOU WON") 
    
    } else if (secondAnswer === 'fight'){
      window.alert('You Died a terrible Death!!')
    }     
      else {
        console.log ('User error. Game Over')    

      }
}
//if user picked right..
else if (firstanswer === "right"){
    console.log("user picked right");
}
    const secondAnswer = window.prompt(` ${name}  chose to go right, you find a chest. Do you open it or keep away?`)
    console.log (secondAnswer);
    
    if (secondAnswer === 'open'){
        window.alert("You find Excaliber!!") 
    
    } else if (secondAnswer === 'keep away'){
      window.alert('You trip over it and break your neck. GAME OVER')
    }     
      else {
        console.log ('User error. Game Over')    
      }