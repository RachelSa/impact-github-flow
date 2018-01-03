const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")
const title = document.getElementById("title")
const pressedkey = document.getElementById("pressedkey")
const textInput = document.getElementById("textInput")
const form = document.getElementsByTagName("form")[0]


window.onload = () => {
  greetingEl.innerText = "oh, hey there!"
  renderAstros()
}

renderAstros = () => {
  const astros = peopleInSpace["people"]
  let peopleEls = astros.map((a) => {
    let name = a["name"]
    return `<li>${name}</li>`
  })
  astrosEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
}

// create a function that alerts "these are all the astronauts!" when the title element is clicked.
title.onclick = () => {
  alert("these are all the astronauts!")
}

// log to the console the client's x coordinate of their mouse as they move it around the window.
// document.onmouseover = (event) => {
//   console.log(event.clientX)
// }
// make an element that displays the most recent key pressed in the DOM

document.onkeypress = (event) => {
  pressedkey.innerText = event.key
}

// create a text input element. When a user clicks on the text field to input, log the input element to console.
textInput.onfocus = (event) => {
  console.log(event.srcElement)
}

// when a user clicks away from the input, log ("bye") to the console.

textInput.onblur = () => {
  console.log("bye")
}

// wrap the input element with a form element.
form.onsubmit = (event) => {
  event.preventDefault()
  pressedkey.innerText = textInput.value
}
// when the form is submitted, render the client's inputted text to the DOM

// HINT: look into event.preventDefault()
