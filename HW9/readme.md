# HW9

I went through many bats at this. I understand that an API is a code that retrieves data from a site. At first I tried to make a google search bar and read an article on how to do that. I'm not sure why it didn't work it might have been outdated code. Then I got frusterated and looked at other students code. Some of them seemed to go above and beyond which was great but since I have a limited amount of time to do this I wasn't able to spend as much time to jquery everything plus I'm not sure if that's what the assignment called for me to do. I then tried to use an API from youtube and it was giving me no errors and was seeming to work but when I tried to search things in it nothing happened. Then I went through some Daniel Shiftman videos and found his one on [Working with APIs in Javascript](http://thecodingtrain.com/Tutorials/10-working-with-data/10.5-working-with-apis-in-javascript.html) and thought that would be helpful and give me good ideas. Since it was made in p5.js I knew I would have to change some things to make them javascript.
```javascript
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
```
I looked up some resources to see how to do that, ultimately couldn't figure that out and then decided to use a library to make the p5 work in my .js file.
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.js"></script>

---
I hope this isn't seen too much as cheating since I genuinely tried to figure this out and did use some problem solving skills to make this version happen. Even got my own API key ;)
