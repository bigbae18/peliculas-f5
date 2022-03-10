const requestUrl = "http://localhost:3000/peliculas";

const getMovies = async () => {
    const response = await fetch(requestUrl);
    const movies = await response.json();
    return movies;
}

const handleSubmitData = async (e) => {
    e.preventDefault()
    const allMovies = await getMovies();
    const lastItem = await allMovies[allMovies.length -1];
    const id = await lastItem.id +1;
    console.log(id);
    const result = {
        id: id
    };
    const elements = e.target.elements;

    for(let i = 0; i < elements.length-1; i++) {
        const item = elements[i];
        result[item.name] = item.value;
    }

    return result;
}

const addMovie = (data) => {
    fetch(requestUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
        window.location.href = "./index.html"
    })
}

document.addEventListener('submit', async (e) => {
    const data = await handleSubmitData(e);

    addMovie(data);
    console.log(data);
})