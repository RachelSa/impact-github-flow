// const greetingEl = document.getElementById("greeting")
// const astrosEl = document.getElementById("astros")
//
// window.onload = () => {
//   greetingEl.innerText = "oh, hey there!"
  // renderAstros()
// }

// renderAstros = () => {
//   const astros = peopleInSpace["people"]
//   let peopleEls = astros.map((a) => {
//     let name = a["name"]
//     return `<li>${name}</li>`
//   })
//   astrosEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
// }

// create a function that alerts "these are all the astronauts!" when the title element is clicked.

var title = document.getElementsByClassName('title')[0]
title.onclick = () => {
    alert('these are all the astronauts')
}

 // log to the console the client's x coordinate of their mouse as they move it around the window.

function getPos(e) {
  x = e.clientX
  // console.log(x)
  document.getElementById("mouseposition").innerHTML=x
}


// make an element that displays the most recent key pressed in the DOM

function uniCharCode(event) {
    var char = event.which || event.keyCode;
    var final = String.fromCharCode(char)// console.log(char)
    document.getElementById("mostrecent").innerHTML = final;
}

// create a text input element. When a user clicks on the text field to input, log the input element to console.

function log() {
  var text = document.getElementById('inputtext').value
  console.log(text)
  document.getElementById("userinput").innerHTML=text
  event.preventDefault();
}

// when a user clicks away from the input, log ("bye") to the console.
// wrap the input element with a form element.
// when the form is submitted, render the client's inputted text to the DOM


function clickaway() {
  console.log("bye")
  event.preventDefault();
}


// NO EXTRA JAVSCRIPT NEEDED HERE


// HINT: look into event.preventDefault()
