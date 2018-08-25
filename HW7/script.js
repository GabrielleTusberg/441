window.onload = function(){
  let body = document.body;


  body.style.padding = "2px";
  body.style.background = "#36363b";

  let variable = document.createElement ("section");

  let firstheading = document.querySelector('#pick');
  let secondheading = document.querySelector('#future');
  let firstparagraph = document.querySelector('#summary');
  let buttonC = document.querySelector('#b1');
  let buttonH = document.querySelector('#b2');
  let buttonK = document.querySelector('#b3');
  let link = document.createElement("a");
  let el = document.createElement("div");
  let heading = document.createElement("h1");
  let paragraph = document.createElement('p');
  let anotherP = document.createElement('P');
  let container1 = document.querySelector(".first-text-container");
  let container2 = document.querySelector(".second-text-container");
  let container3 = document.querySelector(".third-text-container");
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
  secondheading.innerText = "your future awaits";
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
  buttonK.addEventListener("click", showHideText2);
  buttonH.addEventListener("click", showHideText3);


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
      if(container1.hidden){
          buttonC.innerText = "Return";
          container1.hidden = false;
          myImage.hidden = false;
          myImage1.hidden=true;
          myImage2.hidden=true;
          formEl1.hidden = true;
          divEl1.hidden= true;
          container2.hidden = true;
          container3.hidden.hidden= true;
          el.hidden=true;
          buttonH.hidden=true;
          buttonK.hidden=true;

      } else {
          buttonC.innerText = "Courage";
          container1.hidden = true;
          formEl1.hidden = false;
          divEl1.hidden=false;
          el.hidden=false;
          buttonH.hidden=false;
          buttonK.hidden=false;

      }
  }

  function showHideText2() {
      if(container2.hidden){
          buttonK.innerText = "Return";
          container2.hidden = false;
          myImage.hidden = true;
          myImage1.hidden=false;
          myImage2.hidden=true;
          formEl1.hidden= true;
          divEl1.hidden=true;
          container1.hidden=true;
          container3.hidden=true;
          el.hidden=true;
          buttonC.hidden=true;
          buttonH.hidden=true;

      } else {
          buttonK.innerText = "Knowledge";
          container2.hidden = true;
          formEl1.hidden = false;
          divEl1.hidden=false;
          el.hidden=false;
          buttonC.hidden=false;
          buttonH.hidden=false;
          
      }
    }
      function showHideText3() {
        if(container3.hidden){
            buttonH.innerText = "Return";
            container3.hidden = false;
            myImage.hidden = true;
            myImage1.hidden=true;
            myImage2.hidden=false;
            formEl1.hidden= true;
            divEl1.hidden=true;
            container1.hidden=true;
            container2.hidden=true;
            el.hidden=true;
            buttonC.hidden=true;
            buttonK.hidden=true;


        } else {
            buttonH.innerText = "Health";
            container3.hidden = true;
            myImage2.hidden=true;
            formEl1.hidden=false;
            divEl1.hidden= false;
            el.hidden=false;
            buttonC.hidden=false;
            buttonK.hidden=false;

        }
    }
}
