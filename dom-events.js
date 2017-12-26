const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

window.onload = () => {
  greetingEl.innerText = "oh, hey there!"
  getAstros()
}

// getAstros = () => {
//   fetch('http://api.open-notify.org/astros.json')
//   .then(r => r.json())
//   .then(astros => renderAstros(astros))
// }

async function getAstros() {
    try {
      let response = await fetch("http://api.open-notify.org/astros.json")
      let astros = await response.json()
      renderAstros(astros)
    } catch (e) {
      console.log(e)
    }
}

renderAstros = (data) => {
  const astros = data["people"]
  let peopleEls = astros.map((a) => {
    let name = a["name"]
    return `<li>${name}</li>`
  })
  astrosEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
}
