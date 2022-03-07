const requestUrl = "./api/peliculas.json";
const movieSection = document.getElementById('movieSection')


const getMovies = async () => {
    const response = await fetch(requestUrl);
    const movies = await response.json();
    return movies
}
getMovies()
        .then((movies) => {
            console.log(movies);
            
            movies.peliculas.forEach(movie => {


                movieSection.innerHTML += `
                <div class="card">
                    <img src=${img} alt="${title} Image" />
                    <div class="card-body">
                        <h3 class="card-title">${title}</h3>
                        <h4 class="card-subtitle">Director: <span class="bold">${director}</span></h4>
                        <a href="#" class="btn btn-primary"></a>
                    </div>
                </div>
                `
            })
        })

function deleteMovie(id) {

}
