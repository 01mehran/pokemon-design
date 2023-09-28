// START alert message
var inputElement = document.getElementById("searchInput");

inputElement.addEventListener("input", function () {
  var userInput = inputElement.value;
  var parsedNumber = parseFloat(userInput);

  if (parsedNumber > 20 || parsedNumber < 1) {
    alert("Please enter a number between 1 and 20.");
    inputElement.value = "";
  }
});
// END alert message
// ************
// START first Sending Request

function changePokemon() {
  const number = document.getElementById("searchInput").value;

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((response) => {
      const data = response.data;
      const $ = document;
      const imgTAg = data.sprites.other['official-artwork'].front_default;

      //  START first part
      $.getElementById("bulbasaur-word").innerHTML = data.name;
      $.getElementById("main-dragon").src = imgTAg; 
      // END first part
      $.getElementById("dragon-img_2").src = imgTAg;
      $.getElementById("bul-word").innerHTML = data.name;
      $.getElementById("word-above_dragon").innerHTML = data.id;
      $.getElementById("grass-word").innerHTML = data.types[0].type.name;
      $.getElementById("height").innerHTML = data.height;
      $.getElementById("weight").innerHTML = data.weight;

      const formattedId = data.id.toString().padStart(3, "0");
      $.getElementById("word-above_dragon").innerHTML = formattedId;

      changePokemon2();
    })
    .catch((error) => {
      console.log(error);
    });
}
// END first Sending Request
// *****************
// START second sending Request

function changePokemon2() {
  const number = document.getElementById("searchInput").value;
  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${number}`)
    .then((response) => {
      const data = response.data;
      const $ = document;

      $.getElementById("color").innerHTML = data.color.name;
      $.querySelector("#gender").innerHTML = data.genera[7].genus;
    })
    .catch((error) => {
      console.log(error);
    });
}
// START second sending Request
// START styling 

const linkChange = document.querySelector("#pageLink");
const theMain = document.getElementById("the-main");
const main1 = document.querySelector(".main-form");
const subMain = document.querySelector(".sub-form");
const main2 = document.getElementById("main2-form");

linkChange.addEventListener("click", function () {
  if (main2.style.display == "block") {
    main2.style.display = "none";
  } else {
    main2.style.display = "block";
  }

  theMain.style.display = "flex";
  theMain.style.justifyContent = "center";
  theMain.style.columnGap = "50px";
  main2.style.marginTop = "75px";

  main1.style.margin = "0 auto";
});
// END styling
