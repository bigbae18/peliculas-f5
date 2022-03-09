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
const handleChange = (e) => {

}

document.addEventListener('DOMContentLoaded', () => {
    fetchMovie().then(movie => {

        let title = movie.title;
        let director = movie.director;
        let clasification = movie.genre;
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
                    <input type="text" class="form-control" id="title" value="${title}" required>
                </div>
                <div class="mb-3">
                    <label for="director" class="form-label">Director</label>
                    <input type="text" class="form-control" id="director" value="${director}" required>
                </div>
                <div class="mb-3">
                    <label for="genre" class="form-label">Genre</label>
                    <input type="text" class="form-control" id="genre" value="${clasification}" required>
                </div>
                <div class="mb-3">
                    <label for="imgUrl" class="form-label">Image Url</label>
                    <input type="url" pattern="https://.*, http://.*" class="form-control" value="${img}" id="imgUrl" required>
                </div>
                <div class="mb-4 d-flex justify-content-evenly">
                    <button type="submit" class="btn edit-button">Submit</button>
                    <a href="index.html" class="btn delete-button">Go Home</a>
                </div>
            </form>
        `
        movieSection.innerHTML += formTemplate;
        movieSection.innerHTML += cardTemplate;

    });
})