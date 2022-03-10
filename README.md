# AdriClub

Proyecto hecho con HTML5, CSS3 y JavaScript Vanilla hecho por Adrián Pelayo, en el curso de Factoría F5: FullStack Web Developer.

Página web que conecta con `json-server` y realiza un CRUD sencillo de Películas.

## Primeros pasos

Necesitarás tener `git`, `npm` & `json-server`:

> npm install -g json-server

Después, clona el repositorio:

> git clone https://www.github.com/bigbae18/peliculas-f5.git

Para lanzar el `json-server`, depués de hacer el `git clone`, todo en el mismo terminal, cambia de directorio a la nueva carpeta creada y abre el servidor:

> cd peliculas-f5

> json-server --watch ./api/peliculas.json

### Herramientas

Una vez hechos los [Primeros Pasos](#primeros-pasos), podrás visualizar los datos del GitPages con éxito.

Si tienes `Visual Studio Code` también puedes visualizar estos cambios con la Extensión `Live Server`, dando click en `Go Live` una vez instalada.

## Métodos utilizados

La URL por defecto que te genera json-server es `http://localhost:3000/<archivo>`, en este caso nuestro `peliculas.json`

- `GET` - para obtener todas las películas.
- `GET + id` - para obtener una película por id.
- `POST` - para añadir una nueva película.
- `PUT + id` - para editar una película existente.
- `DELETE + id` - para eliminar una película existente.

### Fotos

> Inicio

![Movies](http://bigbae18.github.io/readme_movies/home.png)

> Página de edición

![EditMovie](http://bigbae18.github.io/readme_movies/deletemovie.png)

> Página de añadir una película

![AddMovie](http://bigbae18.github.io/readme_movies/addmovie.png)

## Agradecimientos

Le doy gracias a Factoría F5 por los retos y a todos mis compañeros por el apoyo. 🧡