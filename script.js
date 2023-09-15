// start alert message
var inputElement = document.getElementById("searchInput");

inputElement.addEventListener("input", function () {
  var userInput = inputElement.value;
  var parsedNumber = parseFloat(userInput);

  if (parsedNumber % 1 !== 0) {
    alert("Please Enter integer");
    // parsedNumber = " ";
  }

  if (parsedNumber > 20 || parsedNumber < 1) {
    alert("Please enter a number between 1 and 20.");
  }
});
// End alert message

// Start Sending Request

function changePokemon() {
  const number = document.getElementById("searchInput").value;

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((response) => {
      const data = response.data;
      const name = data.name;
      const imageUrl = data.sprites.front_default;

      document.getElementById("bulbasaur-word").innerHTML = name;
      document.getElementById("main-dragon").src = imageUrl;
    })
    .catch((error) => {
      console.log(error);
    });
}

// End Sending Request
