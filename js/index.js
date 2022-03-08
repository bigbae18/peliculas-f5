const requestUrl = "http://localhost:3000/peliculas";
const movieSection = document.getElementById('movieSection')


const getMovies = async () => {
    const response = await fetch(requestUrl);
    const movies = await response.json();
    return movies
}

const deleteMovie = async (id) => {

}

getMovies()
        .then(movies => {
            console.log(movies);
            
            movies.forEach(movie => {

                let id = movie.id;
                let title = movie.nombre;
                let director = movie.director;
                let clasification = movie.clasificacion;
                let img = movie.imgUrl ?? '';


                movieSection.innerHTML += `
                <section id="${id}" class="card col-12 col-md-4 col-xl-3 card-movie">
                    <div class="card-header text-center py-2">
                        <h4 class="card-title">${title}</h4>
                    </div>
                    <div class="card-body" style="background-image:url(${img})">
                    </div>
                    <div class="card-footer text-muted">
                        <h5 class="card-subtitle mt-4 mb-2">${clasification}</h5>
                        <h6 class="card-subtitle mb-4">${director}</h6>
                    </div>
                </section>
                `
            })
        }).catch(error => {
            console.error(error);
        })