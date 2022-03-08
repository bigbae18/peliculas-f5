const paramsString = window.location.search;
const urlParams = new URLSearchParams(paramsString);
const id = urlParams.get('id');

const requestUrl = "http://localhost:3000/peliculas/" + id;
const movieSection = document.getElementById('movieSection');

const fetchMovie = async () => {
    const response = await fetch(requestUrl);
    const movie = await response.json();
    return movie
}
const editMovie = async (data) => {
    // fetch(url, {method: 'PUT', body: JSON.stringify(data)})
}

document.addEventListener('DOMContentLoaded', () => {
    fetchMovie().then(movie => {

        let title = movie.nombre;
        let director = movie.director;
        let clasification = movie.clasificacion;
        let img = movie.imgUrl ?? '';

        const cardTemplate = `
            <section class="card col-12 col-md-4 col-xl-3 card-movie">
                <div class="card-header text-center py-2">
                    <h4 class="card-title">${title}</h4>
                </div>
                <div class="card-body" style="background-image:url(${img})">
                </div>
                <div class="card-footer">
                    <h5 class="card-subtitle mt-4 mb-2">${clasification}</h5>
                    <h6 class="card-subtitle mb-4">${director}</h6>
                </div>
            </section>
        `
        const formTemplate = `
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
            </form>
        `

        movieSection.innerHTML += cardTemplate;

    });
})