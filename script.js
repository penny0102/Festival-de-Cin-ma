const moviesList = document.getElementById('movies-list')


async function getDataFromApi(){
    const api = `https://api.tvmaze.com/shows`;
    let result = await fetch(api);

    if(!result) return;
    let json_data = await result.json()
    
    for(let movie of json_data.slice(0, 6)){
      let iten = movieIten(movie.image.medium, movie.name, movie.summary);
      moviesList.innerHTML += iten;
    }
}

function movieIten(srcImg, title, desc){
    let  html_code = `
    <div class="iten">
        <div class="card">
          <div class="card-img">
            <img src="${srcImg}" alt="image" />
          </div>

          <div class="card-body">
            <h3>${title}</h3>
            <p>${desc}</p>
          </div>
        </div>
      </div>
    `
    return html_code;

}



getDataFromApi();

