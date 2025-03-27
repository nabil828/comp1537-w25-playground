async function fetchPokemons() {
  const result = await fetch(`http://localhost:5000/api/pokemon`)
  const resultJSON = await result.json()

  // console.log(resultJSON);
  resultJSON.forEach((pokemon, index) => {
    // console.log(`${index + 1}. ${pokemon.name}`);

    x = document.createElement("li")
    x.innerHTML = `
      ${index + 1}. ${pokemon.name}
      <button class="bg-green-400 p-1 rounded  " onClick="addFavorite('${pokemon.name}')">Add to Favorites List</button>
    `
    pokemonList.appendChild(x)
  })
}



async function login() {

  const result = await fetch(`http://localhost:5000/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": usernameInput.value,
      "password": passwordInput.value,
    })
  })
  const resultJSON = await result.json()

  if (result.status == 401) {
    loginErrorParagrap.innerHTML = resultJSON.msg
    return
  }

  await fetchPokemons()
  await fetchFavorites()
  appDiv.classList.toggle("hidden")


}

async function fetchFavorites() {
  const result = await fetch(`http://localhost:5000/api/favorites`, {
    credentials: "include"
  })
  const resultJSON = await result.json()
  // console.log(resultJSON);

  resultJSON.forEach((fav) => {
    x = document.createElement("li")
    x.innerText = fav
    favoritesList.appendChild(x)
  })
}

async function addFavorite(pokemon) {
  const result = await fetch(`http://localhost:5000/api/favorite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "pokemon": pokemon
    }),
    credentials: "include"
  })
  const resultJSON = await result.json()
  // console.log(resultJSON);


  await fetchFavorites()

}