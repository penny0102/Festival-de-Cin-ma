const moviesList = document.getElementById('movies-list')


async function getDataFromApi(){
    const api = `https://api.tvmaze.com/shows?page=${randomNumber()}`;
    try{
      let result = await fetch(api);

        if(!result.ok) {
        console.log(result.status);
        return;
      }

      let jsonData = await result.json();
      jsonData.slice(0, 6).forEach(movie => {
        moviesList.innerHTML += movieIten(movie.image.medium, movie.name, movie.summary); 
        
      })
    }catch (err){
      console.log(err);    
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
            <h1>${title}:</h1>
            <p>${desc}.</p>
          </div>
        </div>
      </div>
    `
    return html_code;

}


function randomNumber(){
    return String(Math.floor(Math.random() * 11));
}


getDataFromApi();