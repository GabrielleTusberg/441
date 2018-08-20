/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/
window.onload = function(){
  let body = document.body;
  body.innerText = "";

  body.style.padding = "2px";
  body.style.background = "#a2b9be";

 let variable = document.createElement ("section");

  let firstheading = document.createElement("h1");
  let secondheading = document.createElement("h2");
  let thirdheading = document.createElement("h3");
  let firstparagraph = document.createElement("p");
  let secondparagraph = document.createElement("p");
  let link = document.createElement("a");
  let myImage = new Image (400,500);
  myImage.src = "images/code.png";

  firstheading.innerText = "WebTech #441";
  secondheading.innerText = "My First JavaScript Page";
  thirdheading.innerText = "By Gabrielle Tusberg";
  firstparagraph.innerText = "This homework is about DOM and API. DOM is document object model is a programming interface for html and xml documents. API, Application Programming Interfaces, make your code easier. ";
  secondparagraph.innerText = "API is a code thats has been developed and allows different applications to communicate to one another, for example it allows HTML and Javascript to communicate. ";
  link.innerText = "Click Here";

  firstheading.setAttribute ("style","font-size:20px; font-weight:bolder; line-height:25px;")
  secondheading.setAttribute ("style","font-size:18px; font-weight:bold; line-height:15px;")
  thirdheading.setAttribute ("style", "font-size:16px; font-weight:initial; line-height:5px;")
  firstparagraph.setAttribute("style", "font-size:12px; font-weight:normal; line-height:3px;")
  secondparagraph.setAttribute("style", "font-size:12px; font-weight:normal; line-height:3px;")

  link.setAttribute ("href", "https://github.com/Montana-Media-Arts/441-WebTech/")

  myImage.setAttribute("style", "border-radius:50%");

  variable.appendChild(firstheading);
  variable.appendChild(secondheading);
  variable.appendChild(thirdheading);
  variable.appendChild(firstparagraph);
  variable.appendChild(secondparagraph);
  variable.appendChild(link);
  variable.appendChild(myImage);
  body.appendChild(variable);
}
