const requestUrl = "http://localhost:3000/peliculas";
const movieSection = document.getElementById('movieSection');

// fetch(requestUrl).then(async movies => console.log(await movies.json()));

const getMovies = async () => {
    const response = await fetch(requestUrl);
    const movies = await response.json();
    return movies;
}

const deleteMovie = async (id) => {
    const confirmation = confirm("Are you sure you want to delete this movie?\n\nAttention! This can't be undone!");

    if (!confirmation) {
        return;
    }
    let deleteRequest = requestUrl + "/" + id;
    let result = await fetch(deleteRequest, {
        method: "DELETE"
    });
    return result;
}

const editMovie = (id) => {
    window.location = "./edit-movie.html?id=" + id;
}

document.addEventListener('DOMContentLoaded', () => {
    getMovies()
        .then(movies => {
            movies.forEach(movie => {

                let id = movie.id;
                let title = movie.title;
                let director = movie.director;
                let clasification = movie.genre;
                let img = movie.imgUrl ?? '';


                movieSection.innerHTML += `
                <section class="card col-12 col-md-4 col-lg-3 card-movie">
                    <div class="card-header text-center py-2">
                        <h4 class="card-title roboto-mono">${title}</h4>
                    </div>
                    <div class="card-body" style="background-image:url(${img})">
                    </div>
                    <div class="card-footer text-muted">
                        <h5 class="card-subtitle mt-4 mb-2 roboto-mono">${clasification}</h5>
                        <h6 class="card-subtitle mb-4 roboto-slab">${director}</h6>
                    </div>
                    <div class="d-flex py-2 justify-content-end gap-2">
                        <button id="edit" onclick="editMovie(${id})" type="button" class="btn edit-button">Edit</button>
                        <button id="delete" onclick="deleteMovie(${id})" type="button" class="btn delete-button" >Delete</button>
                    </div>
                </section>
                `
            })
        }).catch(error => {
            console.error(error);
        })
})

