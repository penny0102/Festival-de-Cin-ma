const moviesList:HTMLElement|null = document.getElementById('movies-list');

async function main(){
    const api:string = 'https://api.tvmaze.com/shows';
    try {
        let respons: any = await fetch(api);
        if(!respons.ok){
            console.log(respons.status);
            return;
        }
        let json_data: any = await respons.json();
        json_data.forEach(movie => {
            
        })

        
    }catch (err){
        console.log(err)
    }


    
}


function addHtmlCode(img: string, title: string, desc: string): string {
    let htmlCode: string = `
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
    `
    return htmlCode;
}