console.log("Playing with DOM!");

// Query selectors

// element.querySelector(selector) - returns a reference to the first match of selector.
// element.querySelectorAll(selectors) - returns a “NodeList” containing references to all of the matches of the selectors.



// Element creation

// document.createElement(tagName, [options]) - creates a new element of tag type tagName. [options] in this case means you can add some optional parameters to the function. Don’t worry about these at this point.

// Append elements

// parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.
// parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.
// Remove elements

// parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.


const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const p = document.createElement("p");
p.classList.add("para");
p.textContent = "Hey I’m red!";
container.appendChild(p);
p.setAttribute("style", "color: red;");


const h = document.createElement("h3");
h.classList.add("h3");
h.textContent = "I’m a blue h3!";
container.appendChild(h);
h.setAttribute("style", "color: blue;");

const content2 = document.createElement("div");
content2.classList.add("content");
container.appendChild(content2);
content2.setAttribute("style", "border-style: solid; border-color: black; border-width: 5px; background: pink;");

const h1 = document.createElement("h1");
h1.classList.add("h31");
h1.textContent = "I’m in a div";
content2.appendChild(h1);

const p2 = document.createElement("p");
p2.classList.add("para");
p2.textContent = "ME TOO!";
content2.appendChild(p2);
p2.setAttribute("style", "color: red;");


console.log("Playing with DOM!");



// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.



// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World")
// // btn.onclick = () => console.log("button clicked!!!");


// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
//   console.log("button clicked!!!");
// });

// btn.addEventListener("click", function (e) {
//     console.log(e);
//   });

// btn.addEventListener("click", function (e) {
//     console.log(e.target);
//   });

btn.addEventListener("click", function (e) {
    e.target.style.background = "green";
      console.log("button clicked!!!");

  });

  const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});