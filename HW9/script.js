//
// window.onload = function(){
//   let body = document.body;
//
//
//   body.style.padding = "2px";
//   // body.style.background = "#36363b";
//
// let divEl1 = document.querySelector(".storageDiv");
// let formEl1 = document.querySelector(".searchbar");
var weather;

function setup() {
  createCanvas(400,200);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=a32e0bdaea6c00092fc7227af7995774&units=metric',gotData)
}

function gotData(data) {
  weather = data;
}
function draw() {
  background(0);
  if (weather){
    ellipse(100,100, weather.main.temp, weather.main.temp);
    ellipse(300,100, weather.main.humidity, weather.main.humidity);

  }
}
// function grabText() {
//     let textIn;
//     textIn = document.querySelector("#textIn1").value;
//
//     if( textIn.length < 1){ alert("Please refresh the browser and use the search bar!"); return }
//
//
//     let textToAdd = document.createTextNode("Hello "+textIn+" welcome to your future!");
//
//     let newP = document.createElement("P");
//
//
//     newP.appendChild(textToAdd);
//
//
//     let storage = document.querySelector("#storageDiv");
//
//     storage.appendChild(newP);
//
// }
//
// document.querySelector("#runButton").addEventListener( 'click',grabText);
