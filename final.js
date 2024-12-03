const URL = "https://api.chucknorris.io";
const URL2 = "https://api.chucknorris.io/jokes/random";
const jokeButton = document.getElementById("getJokeButton");
const categoryInput = document.getElementById("getCategory");
const jokeContainer = document.getElementById("jokeContainer");
const chuckImage = document.getElementById("chuckImage");
const divContainer = document.getElementById("page2Container");
const searchInput = document.getElementById("searchQuery");

const options = {
  method: "GET",
};

async function display(text, img) {
  jokeContainer.innerHTML = "";
  const jokeElement = document.createElement("p");
  jokeElement.textContent = text;

  const imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = "Chuck Norris";

  jokeContainer.append(jokeElement, imgElement);
}

async function getRandomJoke() {
  try {
    const response = await fetch(URL2, options);
    const result = await response.text();
    myObj = JSON.parse(result);

    display(myObj.value, myObj.icon_url);
  } catch (error) {
    console.log(error);
  }
}

async function getRandomCategoryJoke() {
  const categoryEntry = categoryInput.value;
  const categoryURL = `https://api.chucknorris.io/jokes/random?category=${categoryEntry}`;
  try {
    const response = await fetch(categoryURL, options);
    const result = await response.text();
    myObj = JSON.parse(result);

    display(myObj.value, myObj.icon_url);
  } catch (error) {
    console.log(error);
  }
}

async function getCategories() {
  try {
    const response = await fetch(`${URL}/jokes/categories`, options);
    const result = await response.text();
    myObj = JSON.parse(result);

    jokeContainer.innerHTML = "";

    const ulElement = document.createElement("ul");
    myObj.forEach((category) => {
      const liElement = document.createElement("li");
      liElement.textContent = category;
      ulElement.appendChild(liElement);
    });
    jokeContainer.appendChild(ulElement);
  } catch (error) {
    console.log(error);
  }
}

async function searchQuery() {
  let searchVal = searchInput.value;
  const searchURL = `https://api.chucknorris.io/jokes/search?query=${searchVal}`;
  try {
    const response = await fetch(searchURL, options);
    const result = await response.text();
    myObj = JSON.parse(result);

    divContainer.innerHTML = "";
    const ulElement = document.createElement("ul");
    myObj.result.forEach((joke) => {
      const liElement = document.createElement("li");
      liElement.textContent = joke.value;
      ulElement.appendChild(liElement);
    });
    divContainer.appendChild(ulElement);
  } catch (error) {
    console.log(error);
  }
}
