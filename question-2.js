const key = "230c43bb8c40463299accfd7f3bebbdf";

const API_URL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=" +
  key;

const display = document.querySelector(".container");

async function callRawgAPI() {
  const response = await fetch(API_URL);
  const obj_response = await response.json();
  const results = obj_response.results;

  let _name;
  let rating;
  let numOfTags;

  for (let i = 0; i < 8; i++) {
    const obj_result = results[i];
    _name = obj_result.name;
    rating = obj_result.rating;
    numOfTags = obj_result.tags.length;

    console.log("OBJECT " + (i + 1));
    console.log("Name = " + _name);
    console.log("Rating = " + rating);
    console.log("Number of tags = " + numOfTags);
    console.log("--------------");

    display.innerHTML += `<div class ="block">
                            <h1>Object ${i + 1}</h1>
                            <p>Name: ${_name}</p>
                            <p>Rating: ${rating}</p>
                            <p>Number of tags: ${numOfTags}</p>
                          </div>`;
  }
}
callRawgAPI();
