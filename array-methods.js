var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
function distribute(element, index, array) {
	el.innerHTML += `<p>Planet ${index}: ${element} </p>`;
}

var el = document.getElementById("planets");
planets.forEach(distribute);

// Use the map method to create a new array where the first letter of each planet is capitalized
function capitalize(element, index, array) {
	//seperates each letter in the array and converts those letters to strings
	//ex: ["m", "a", "r", "s"]
	let splitArray = element.split("");
	//Takes the first string in the array and capitilizes it
	let cappedFirst = splitArray[0].toUpperCase();
	//removes the original first string
	splitArray.shift();
	//replaces the first string with the capitilized first string
	splitArray.unshift(cappedFirst);
	//converts the strings into an array
	let joinedWords = splitArray.join("");
	console.log("Capitilized first letters: ", joinedWords);
}

//map takes each string in an array and converts them into their own array
//ex: ["mercury"], ["venus"]...
planets.map(capitalize);

// Use the filter method to create a new array that contains planets with the letter 'e'
function filterPlanets(element, index, array) {
	for (let i = 0; i < array.length; i++) {
		//loops through every letter of each word to check for the letter "e"
		if (element[i] === "e") {
			return element;
		}
	}
}

let filteredPlanets = planets.filter(filterPlanets)
console.log("filter: ", filteredPlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + " " + currentValue;
});
console.log("Reduced sentence: ", words);