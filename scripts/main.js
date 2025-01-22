// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

// alert("hello!");

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });

// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });

//this is called an anonymous function and there are two ways to do it, the top one and the bottom one, with the bottom one specifically being called an arrow function

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/johnpork.jpg") {
    myImage.setAttribute("src", "images/lessercheesev2.jpg");
  } else {
    myImage.setAttribute("src", "images/johnpork.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }


  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });