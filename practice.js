
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  //return the number of astronauts in space right now, using the data
    return data.number
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))


const astroNames = (data) => {
  // return an array containing the name strings of the astronauts in space
    let astroname = []

    for(i = 0; i < data.number; i++) {
        astroname[i] = data.people[i].name
    }

    return astroname
}
console.log("names of people in space: ", astroNames(peopleInSpace))


const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
    var val1 = data.people[0].craft

    for(i = 0; i < data.number; i++) {
        if(data.people[i].craft =! val1) {
            return false
        }
    }
    return true
}
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
  // return a boolean that specifies whether the response from the Open Notify API was successful
    if(data.message == "success"){
        return true
    }
    return false
}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
    for(i = 0; i < data.number; i++) {
        //console.log(data.people[i].name)
        if(data.people[i].name.includes("Joe")) {

            return "in space!"
        }
    }
    return "dunno"
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.
const tempList = document.getElementById("astroList")
window.onload = () => {

  tempArray = astroNames(peopleInSpace)
  final = ""

  for(i = 0; i < tempArray.length; i++) {
    temp = tempArray[i]
    temp = "<li>" + temp + "</li>"
    final += temp
    tempArray[i] = temp
  }
  tempList.innerHTML = final
}
