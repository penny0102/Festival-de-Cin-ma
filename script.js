const moviesList = document.getElementById('movies-list')


function getDataFromApi(){
    const api = `https://api.tvmaze.com/shows`;
    fetch(api).then(res => res.json()).then(data => {
        data.slice(0, 6).forEach(movie => {
        let iten = movieIten(movie.image.medium, movie.name, movie.summary);
        moviesList.innerHTML += iten;

        })

    }).catch(err => console.log(err));
}

const movieIten = (srcImg, title, desc) => 
    `
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


getDataFromApi();

