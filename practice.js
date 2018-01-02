
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  //return the number of astronauts in space right now, using the data
  return data.people.length
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))


const astroNames = (data) => {
  // return an array containing the name strings of the astronauts in space
  return data.people.map((person) => {
    return person.name
  })
}
console.log("names of people in space: ", astroNames(peopleInSpace))


const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
  let allSame = true;
  for (var i = 0; i < data.length - 1; i++) {
    if (data.people[i].craft != data.people[i+1].craft) {
      allSame = false;
    }
  }
  return allSame;
}
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
  // return a boolean that specifies whether the response from the Open Notify API was successful
  return (data.message === "success")
}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
  let people = astroNames(data);
  return (people.indexOf("Joe Acaba") >= 0) ? "in space!" : "dunno";
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.
const renderNames = () => {
  let answer = "";
  let names = astroNames(peopleInSpace);
  console.log(names);
  names.forEach((person) => {
    answer += ("<li>" + person + "</li>");
  })
  console.log(answer);
  answer = "<ul>" + answer + "</ul>";
  document.body.innerHTML += (answer);
}
