const key = "230c43bb8c40463299accfd7f3bebbdf";

const API_URL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=" +
  key;

const display = document.querySelector(".container");
const circleContainer = document.querySelector(".circle");

async function callRawgAPI() {
  try {
    const response = await fetch(API_URL);
    const objResponse = await response.json();
    const results = objResponse.results;

    let _name;
    let rating;
    let numOfTags;

    for (let i = 0; i < 8; i++) {
      const result = results[i];
      _name = result.name;
      rating = result.rating;
      numOfTags = result.tags.length;

      display.innerHTML += `<div class ="block">
                            <h1>Object ${i + 1}</h1>
                            <p>Name: ${_name}</p>
                            <p>Rating: ${rating}</p>
                            <p>Number of tags: ${numOfTags}</p>
                          </div>`;
    }
  } catch (err) {
    display.innerHTML = `<h1>${err}</h1>`;
  }
}

//simulating loading time

setTimeout(function () {
  callRawgAPI();
  circleContainer.innerHTML = "";
}, 2000);
