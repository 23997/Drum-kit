let buttons = document.querySelectorAll(".drum");

for (let i=0; i<7; i++) {
   buttons[i].addEventListener("click", function (){
      let buttonName=this.innerHTML;
      makeSound(buttonName);
      addAnimation(buttonName);
  
   })

}

document.addEventListener("keypress", function(event){
makeSound(event.key); 
addAnimation(event.key);

})

function makeSound(key){
   switch(key){
      case "w": let audio = new Audio("tom-1.mp3");
                audio.play();
                break;
      case "a": let audio1 = new Audio("tom-2.mp3");
                audio1.play();
                break;
      case "s": let audio2 = new Audio("tom-3.mp3");
                audio2.play();
                break;
      case "d": let audio3 = new Audio("tom-4.mp3");
                audio3.play();
                break;
      case "j": let audio4 = new Audio("snare.mp3");
                audio4.play();
                break;
      case "k": let audio5 = new Audio("crash.mp3");
               audio5.play();
               break;
      case "l": let audio6 = new Audio("kick-bass.mp3");
                audio6.play();
               break;
               default: console.log(key)
   }
}

function addAnimation(currentkey){
   let pressedKey = document.querySelector("."+currentkey);
   pressedKey.classList.add("pressed");
   setTimeout(function(){
      pressedKey.classList.remove("pressed");
   },150)
}



