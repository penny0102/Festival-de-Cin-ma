"use strict";
const moviesList = document.getElementById('movies-list');
async function main() {
    const api = `https://api.tvmaze.com/shows?page=${randomNumber()}`;
    try {
        let respons = await fetch(api);
        if (!respons.ok) {
            console.log(respons.status);
            return;
        }
        let json_data = await respons.json();
        json_data.slice(0, 6).forEach(movie => {
            moviesList.innerHTML += addHtmlCode(movie.image.medium, movie.name, movie.summary);
        });
    }
    catch (err) {
        console.log(err);
    }
}
function addHtmlCode(img, title, desc) {
    let htmlCode = `
    <div class="iten">
        <div class="card">
          <div class="card-img">
            <img src="${img}" alt="image" />
          </div>

          <div class="card-body">
            <h3>${title}:</h3>
            <p>${desc}.</p>
          </div>
        </div>
      </div>
    `;
    return htmlCode;
}
function randomNumber() {
    return String(Math.floor(Math.random() * 11));
}

main();