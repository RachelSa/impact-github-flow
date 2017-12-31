const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

window.onload = () => {
  greetingEl.innerText = "oh, hey there!"
  getAstros()
}

getAstros = () => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    //  if response is successful and request is finished...
    console.log(this.readyState)
  if (this.readyState == 4 && this.status == 200) {
    renderAstros(JSON.parse(this.responseText))
    }
  }
  xhttp.open("GET", "http://api.open-notify.org/astros.json", true)
  // type of request, url, asyc
  xhttp.send()
}

// getAstros = () => {
//   fetch('http://api.open-notify.org/astros.json')
//   .then(r => r.json())
//   .then(astros => renderAstros(astros))
// }

// async function getAstros() {
//     try {
//       let response = await fetch("http://api.open-notify.org/astros.json")
//       let astros = await response.json()
//       renderAstros(astros)
//     } catch (error) {
//       console.log(error)
//     }
// }

renderAstros = (data) => {
  const astros = data["people"]
  let peopleEls = astros.map((a) => {
    let name = a["name"]
    return `<li>${name}</li>`
  })
  astrosEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
}
