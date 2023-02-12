var n = document.querySelectorAll(".animal").length;

for(var i=0; i<n; i++){
    document.querySelectorAll(".animal")[i].addEventListener("click", function(){
    var text = this.innerHTML;
    switch(text){
       case " ":
       document.body.style.backgroundImage = "url('images/pexels-helena-lopes-1996333.png')";
       var audio = new Audio("sounds/horse-123780.mp3");
       audio.play();
       break;

       case "  ":
       document.body.style.backgroundImage = "url('images/mon_636103ccb1caf.jpg')";
       var audio = new Audio("sounds/monkey-scream-6407.mp3");
       audio.play();
       break;

       case "   ":
       document.body.style.backgroundImage = "url('images/elephant.jpg')";
       var audio = new Audio("sounds/elephant-trumpets-growls-6047.mp3");
       audio.play();
       break;

       case "    ":
       document.body.style.backgroundImage = "url('images/gettyimages-837898820-1-4deae142d4d0403dbb6cb542bfc56934.jpg')";
       var audio = new Audio("sounds/mixkit-dog-barking-twice-1.wav");
       audio.play();

       break;

       case "     ":
       document.body.style.backgroundImage = "url('images/image.jpg')";
       var audio = new Audio("sounds/mixkit-domestic-cat-hungry-meow-45.wav");
       audio.play();
       break;


    }

    });
}
