fetch(
  `https://yts.mx/api/v2/list_movies.json?genre=animation&minimum_rating=8`
)
  .then((resp) => resp.json())
  .then((respJSON) => {
    console.log(respJSON);
    for (let i = 0; i < respJSON.data.movies.length; i++) {
      result.innerHTML += `
                  <div class="basis-1/4">
                    <div class="relative">
                      <img src="${respJSON.data.movies[i].large_cover_image}">
                      <div class="absolute top-[50%] left-[50%] text-slate-200 -translate-x-[50%] -translate-y-[50%]">
                        ${respJSON.data.movies[i].rating}
                      <div>
                    </div>
                  </div>
                    ${respJSON.data.movies[i].title}
                `;
    }
  })
  .catch((err) => {
    console.log(err);
  });

current_page = 2
btn1.addEventListener("click", () => {
  fetch(
    `https://yts.mx/api/v2/list_movies.json?genre=animation&minimum_rating=8&page=${current_page}`
  )
    .then((resp) => resp.json())
    .then((respJSON) => {
      console.log(respJSON);
      for (let i = 0; i < respJSON.data.movies.length; i++) {
        result.innerHTML += `
                  <div class="basis-1/4">
                    <div class="relative">
                      <img src="${respJSON.data.movies[i].large_cover_image}">
                      <div class="absolute top-[50%] left-[50%] text-slate-200 -translate-x-[50%] -translate-y-[50%]">
                        ${respJSON.data.movies[i].rating}
                      <div>
                    </div>
                  </div>
                    ${respJSON.data.movies[i].title}
                `;
      }
      current_page++;
    })
    .catch((err) => {
      console.log(err);
    });
})