x = 0;
y = 0;

draw_apple = "";
screenwidth=0
screenheight=0
apple=""
speak_data=""
to_number=0

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number=Number(content)
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML="Started drawing apple"
      draw_apple="set"
    }
    else{
      document.getElementById("status").innerHTML="The Speech Has Not Recognized A Number"
    }

}

function setup() {
 screenwidth=window.innerWidth
 screenheight=window.innerHeight
 canvas=createCanvas(screenwidth,screenheight-150)
  canvas.position(0,150)
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i=1;i<=to_number;i++){
      x=Math.floor(Math.random()*700)
      y=Math.floor(Math.random()*400)
      image(apple,x,y,50,50)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data=to_number+"apples drawn"
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  apple=loadImage("apple.png")

}