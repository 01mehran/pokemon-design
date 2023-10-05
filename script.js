// START alert message
var inputElement = document.getElementById("searchInput");

inputElement.addEventListener("input", function () {
  var userInput = inputElement.value;
  var parsedNumber = parseFloat(userInput);

  if (parsedNumber > 20 || parsedNumber < 1) {
    alert("Please enter a number between 1 and 20.");
    inputElement.value = " ";
  } else {
    changePokemon(userInput);
  }
});
// END alert message
// ************
// START first Sending Request

function changePokemon(userInput) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    .then((response) => {
      const data = response.data;
      const $ = document;
      const imgUrl1 = data.sprites.front_default;
      const imgUr2 = data.sprites.other["official-artwork"].front_default;
      //  START first part

      $.getElementById("bulbasaur-name").innerHTML = data.name;
      $.getElementById("First-parent_img").src = imgUrl1;

      // END first part
      $.getElementById("Second-parent_img").src = imgUr2;
      $.getElementById("second-bulbasaur_name").innerHTML = data.name;
      $.getElementById("dragon-Id").innerHTML = data.id;
      $.getElementById("pokemone-type").innerHTML = data.types[0].type.name;
      $.getElementById("height").innerHTML = data.height;
      $.getElementById("weight").innerHTML = data.weight;

      const formattedId = data.id.toString().padStart(3, "0");
      $.getElementById("dragon-Id").innerHTML = formattedId;

      changePokemon2(userInput);
    })
    .catch((error) => {
      console.log(error);
    });
}
// END first Sending Request

// START second sending Request

function changePokemon2(userInput) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${userInput}`)
    .then((response) => {
      const data = response.data;
      const $ = document;

      $.getElementById("color").innerHTML = data.color.name;
      $.querySelector("#pokemon-jender").innerHTML = data.genera[7].genus;
    })
    .catch((error) => {
      console.log(error);
    });
}
// START second sending Request
// START styling
const linkChange = document.querySelector("#pageLink");
const SecondParent = document.querySelector("#Second-parent");
// //////////////////////////////////////////////
linkChange.addEventListener("click", () => {
  if (SecondParent.style.display == "block") {
    SecondParent.style.display = "none";
  } else {
    SecondParent.style.display = "block";
  }
  // ////////////////////////////////////////////
});

// END styling
