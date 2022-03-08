const requestUrl = "http://localhost:3000/peliculas";
const movieSection = document.getElementById('movieSection');


const getMovies = async () => {
    const response = await fetch(requestUrl);
    const movies = await response.json();
    return movies
}

const deleteMovie = async (id) => {

}
const editMovie = (id) => {
    window.location = "./movie.html?id=" + id;
}

document.addEventListener('DOMContentLoaded', () => {
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
                <section class="card col-12 col-md-4 col-xl-3 card-movie">
                    <div class="card-header text-center py-2">
                        <h4 class="card-title roboto-mono">${title}</h4>
                    </div>
                    <div class="card-body" style="background-image:url(${img})">
                    </div>
                    <div class="card-footer text-muted">
                        <h5 class="card-subtitle mt-4 mb-2 roboto-mono">${clasification}</h5>
                        <h6 class="card-subtitle mb-4">${director}</h6>
                    </div>
                    <div class="d-flex py-2 justify-content-end gap-2">
                        <button onclick="editMovie(${id})" type="button" class="btn edit-button">Edit</button>
                        <button onclick="deleteMovie(${id})" type="button" class="btn delete-button">Delete</button>
                    </div>
                </section>
                `
            })
        }).catch(error => {
            console.error(error);
        })
})

