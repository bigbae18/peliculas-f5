const paramsString = window.location.search;
const urlParams = new URLSearchParams(paramsString);
const id = urlParams.get('id');

const requestUrl = "http://localhost:3000/peliculas/" + id;
const movieSection = document.getElementById('movieSection');

const getMovies = async () => {
    const response = await fetch(requestUrl);
    const movies = await response.json();
    return movies;
}

const handleSubmitData = async (e) => {

    e.preventDefault()

    const result = {
        id: id
    };

    const elements = e.target.elements;

    for(let i = 0; i < elements.length-1; i++) {
        if (elements[i] == "") {
            throw Error('Input ' + elements[i].name + ' is empty!')
        }
        const item = elements[i];
        result[item.name] = item.value;
    }

    return result;
}

const editMovie = async (e) => {
    const handledData = await handleSubmitData(e);
    console.log(handledData);
    let confirmation = false;

    await fetch(requestUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(handledData)
    }).then(() => {
        confirmation = true;
    }).catch((err) => {
        console.error(err);
        alert('Something went wrong!');
    })

    return confirmation;
}

document.addEventListener('submit', async (e) => {
    e.preventDefault();
    const confirmation = editMovie(e);
    if (!confirmation) {
        return;
    }

    window.location.href = "./index.html";
})

document.addEventListener('DOMContentLoaded', () => {
    getMovies()
        .then(movie => {

            let title = movie.title;
            let director = movie.director;
            let clasification = movie.genre;
            let img = movie.imgUrl;

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
                        <input name="title" type="text" class="form-control" id="title" value="${title}" required>
                    </div>
                    <div class="mb-3">
                        <label for="director" class="form-label">Director</label>
                        <input name="director" type="text" class="form-control" id="director" value="${director}" required>
                    </div>
                    <div class="mb-3">
                        <label for="genre" class="form-label">Genre</label>
                        <input name="genre" type="text" class="form-control" id="genre" value="${clasification}" required>
                    </div>
                    <div class="mb-3">
                        <label for="imgUrl" class="form-label">Image Url</label>
                        <input name="imgUrl" type="url" class="form-control" value="${img}" id="imgUrl" required>
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