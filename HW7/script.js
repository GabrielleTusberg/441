window.onload = function(){
  let body = document.body;


  body.style.padding = "2px";
  body.style.background = "#36363b";

  let variable = document.createElement ("section");

  let firstheading = document.querySelector('h1');
  let secondheading = document.querySelector('h2');
  let firstparagraph = document.querySelector('p');
  let buttonC = document.querySelector('#b1');
  let buttonH = document.querySelector('#b2');
  let buttonK = document.querySelector('#b3');
  let link = document.createElement("a");
  let el = document.createElement("div");
  let heading = document.createElement("h1");
  let paragraph = document.createElement('p');
  let anotherP = document.createElement('P');
  let textEl = document.querySelector(".extra-text-container");
  let textEl2 = document.querySelector(".another-text-container");
  let textEl3 = document.querySelector(".original-text-container");
  let divEl1 = document.querySelector(".storageDiv");
  let formEl1 = document.querySelector(".nameForm");
  let myImage = new Image (400,500);
  let myImage1 = new Image (400,500);
  let myImage2 = new Image (400,500);
  let myImage3 = new Image (400,500);
  myImage.src = "images/courage.png";
  myImage1.src = "images/health.png";
  myImage2.src = "images/knowledge.png";
  myImage3.src = "images/Image3.jpg";

  firstheading.innerText = "Take Your Pick";
  secondheading.innerText = "(your future awaits)";
  firstparagraph.innerText = "Everyone wants to accomplish several different things at once to better themselves in either health, knowledge, or courage. This adventure story will give you a path for each choice. There will be a consequence that follows.";


  firstheading.setAttribute ("style","font-size:20px; font-weight:bolder; line-height:25px;")
  secondheading.setAttribute ("style","font-size:18px; font-weight:bold; line-height:15px;")
  firstparagraph.setAttribute("style", "font-size:12px; font-weight:normal; line-height:15px;")


  myImage.setAttribute("style", "100%");
  myImage1.setAttribute("style", "100%");
  myImage2.setAttribute("style", "100%");
  myImage3.setAttribute("style", "100%");




  variable.appendChild(firstheading);
  variable.appendChild(secondheading);
  variable.appendChild(firstparagraph);
  variable.appendChild(myImage);
  variable.appendChild(myImage1);
  variable.appendChild(myImage2);

  body.appendChild(variable);


  buttonC.addEventListener("click", showHideText);
  buttonH.addEventListener("click", showHideText2);
  buttonK.addEventListener("click", showHideText3);


  function grabText() {
      let textIn;
      textIn = document.querySelector("#textIn1").value;

      if( textIn.length < 1){ alert("Please refresh the browser and enter a name!"); return }


      let textToAdd = document.createTextNode("Hello "+textIn+" welcome to your future!");

      let newP = document.createElement("P");


      newP.appendChild(textToAdd);


      let storage = document.querySelector("#storageDiv");

      storage.appendChild(newP);

  }

  document.querySelector("#runButton").addEventListener( 'click',grabText);



  function showHideText() {
      if(textEl.hidden){
          buttonC.innerText = "Return";
          textEl.hidden = false;
          formEl1.hidden = true;
          divEl1.hidden= true;
          textEl3.hidden = true;
          textEl2.hidden= true;
          el.hidden=true;


      } else {
          buttonC.innerText = "Courage";
          textEl.hidden = true;
          // divEl2.hidden=true;
          formEl1.hidden = false;
          divEl1.hidden=false;
          textEl3.hidden=false;
          btEl2.hidden=false;
          el.hidden=false;

      }
  }

  function showHideText2() {
      if(textEl2.hidden){
          buttonH.innerText = "Return";
          textEl2.hidden = false;
          imgEl1.hidden= false;
          formEl1.hidden= true;
          divEl1.hidden= true;
          textEl3.hidden= true;
          textEl.hidden= true;
          btEl.hidden= true;
          el.hidden= true;


      } else {
          buttonH.innerText = "Health";
          textEl2.hidden = true;
          imgEl1.hidden= true;
          formEl1.hidden= false;
          divEl1.hidden= false;
          textEl3.hidden= false;
          btEl.hidden= false;
          el.hidden= false;

      }
    }
      function showHideText3() {
        if(textEl2.hidden){
            buttonK.innerText = "Return";
            textEl2.hidden = false;
            imgEl1.hidden= false;
            formEl1.hidden= true;
            divEl1.hidden= true;
            textEl3.hidden= true;
            textEl.hidden= true;
            btEl.hidden= true;
            el.hidden= true;


        } else {
            buttonK.innerText = "Health";
            textEl2.hidden = true;
            imgEl1.hidden= true;
            formEl1.hidden= false;
            divEl1.hidden= false;
            textEl3.hidden= false;
            btEl.hidden= false;
            el.hidden= false;

        }
      }
}
