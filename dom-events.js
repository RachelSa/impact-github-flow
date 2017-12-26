const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

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
