
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  return peopleInSpace.number
  //return the number of astronauts in space right now, using the data
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))


const astroNames = (data) => {
  names = peopleInSpace.people.map((person) => {
    return person.name
  })
  return names
  // return an array containing the name strings of the astronauts in space
}
console.log("names of people in space: ", astroNames(peopleInSpace))

const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
  let craft = peopleInSpace.people[0].craft
  let answer = true
  peopleInSpace.people.forEach((person) => {
    if(person.craft != craft){
      answer = false
    }
  })
  return answer
}
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
  // return a boolean that specifies whether the response from the Open Notify API was successful
  return peopleInSpace.message == "success"
}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
  let joe = "Joe Acaba"
  answer = "dunno"
  peopleInSpace.people.forEach((person) => {
    if(person.name == joe){
      answer = "in space!!!"
    }
  })
  return answer
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.
