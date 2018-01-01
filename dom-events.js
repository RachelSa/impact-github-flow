const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")
const title = document.getElementById('test')

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
