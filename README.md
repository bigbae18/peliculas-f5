# AdriClub

Proyecto hecho con HTML5, CSS3 y JavaScript Vanilla hecho por Adrián Pelayo, en el curso de Factoría F5: FullStack Web Developer.

Página web que conecta con `json-server` y realiza un CRUD sencillo de Películas.

### Primeros pasos

Necesitarás tener `npm` & `json-server`:

> npm install -g json-server

Para lanzar el `json-server`, en terminal:

> json-server --watch ./api/peliculas.json

### Extensiones

Utilizar la extensión `Live Server` de Visual Studio Code para previsualizar el html.

## Métodos utilizados

La URL por defecto que te genera json-server es `http://localhost:3000/<archivo>`, en este caso nuestro `peliculas.json`

- `GET` - para obtener todas las películas.
- `GET + id` - para obtener una película por id.
- `POST` - para añadir una nueva película.
- `PUT + id` - para editar una película existente.
- `DELETE + id` - para eliminar una película existente.

### Agradecimientos

Le doy gracias a Factoría F5 por los retos y a todos mis compañeros por el apoyo. 🧡