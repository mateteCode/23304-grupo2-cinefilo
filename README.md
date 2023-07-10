# TRABAJO INTEGRADOR CODO A CODO 4.0 #23304

## _Cinefilo_

El sitio web Cinéfilo, de búsqueda de películas, diseñado para ofrecer a los usuarios una experiencia intuitiva, atractiva y amigable, permitiéndoles descubrir y gestionar películas. El objetivo principal del proyecto es proporcionar a los amantes del cine la capacidad de buscar películas, ver información detallada de cada una y realizar acciones como agregar películas a la lista de favoritos y bloquear películas para evitar nuevas apariciones en las búsquedas futuras.

## Caracteristicas

- Búsqueda de películas: Tanto los usuarios como los visitantes sin registro, pueden buscar películas utilizando un cotidiano formulario de búsqueda. Pueden ingresar el título de la película o una o más palabras clave relevante sobre su descripción. El sistema realizará una solicitud a una API pública de películas para obtener los resultados de búsqueda correspondientes, mostrandose en forma de tarjetas de a 20 resultados a demanda.
- Detalles de la película: Los usuarios registrados y los visitantens pueden pasar el mouse sobre cualquier tarjeta de película, aparecerá un efecto “hover ”que muestra información detallada sobre la película. Esta información incluye una sinopsis, el título, año de estreno, rating como características interesantes.
- Gestión de favoritos: Los usuarios registrados tienen la capacidad de agregar películas a su lista de favoritos. Esta funcionalidad les permite guardar películas que les interesen y acceder fácilmente a ellas en el futuro, yendo a la seccion correspondiendo, accediendo a esas peliculas con las mismas tarjetas y funcionalidades.
- Bloqueo de películas: Los usuarios registrados también pueden bloquear películas para evitar que aparezcan en futuras búsquedas. Esto es útil cuando un usuario no desea ver o recibir recomendaciones de ciertas películas. Esta acción puede deshacerse en cualquier momento, yendo a su sección correspondiente.
- Comentarios: Los usuarios registrados pueden acceder a una sección de comentarios donde pueden ver y agregar comentarios sobre la película haciendo click sobre el icono central inferion que se les abrirá un “popup”, con información completa de la película, un formulario de ingreso donde puede compartir sus opiniones, críticas o recomendaciones con otros usuarios. En una sección inferrior puede ver todos los comentarios de la película. Cada comentario incluye el contenido del comentario, el nombre y la foto del autor, así como la fecha en que se hizo.
- Autenticación de usuarios: El sitio web permite a los usuarios registrarse y autenticarse utilizando su correo electrónico y contraseña, o mediante una cuenta de Google. La autenticación es necesaria para acceder a las funcionalidades de favoritos, bloqueo y comentarios.
- Perfil de usuario: Los usuarios registrados tienen además acceso a una sección de perfil donde pueden personalizar su foto de perfil, ver estadísticas sobre su actividad en el sitio y realizar acciones como cerrar sesión

## Tecnologías

Se usan los siguientes proyectos de código abierto para funcionar correctamente

- [node.js] - NodeJs es necesario para correr ReactJS
- [firebase-auth/database/storage/hooks] - Firebase
- [ReactJS] - ReactJS
- [react-icons] - React Icons
- [react-router] - React Router
- [react-spinners-kit] React Spinners Kit

## Instalación

Cinefilo requiere [Node.js](https://nodejs.org/) para correr en modo desarrollo.
Instala las dependencias y las depenedencias de desarrollo para el cliente ReactJS

```sh
npm install
```

## Development

Para correr el cliente React

```sh
npm run dev
```

> **Importante**
> Editar el achivo /src/components/SearchMovie.jsx y poner tu propia API KEY en la linea 6
> const APIKEY = "PONER-TU-PROPIA-API-KEY"
> La APIKEY se obtiene registranse en la pagina https://www.themoviedb.org/signup
> Luego ir a Más/API/Crear/Developer/Aceptar licencia/completar formularios
> Esto es importante ya que la API limit a 40 consultas por minuto

## License

MIT

[node.js]: http://nodejs.org
[firebase-auth/database/storage/hooks]: https://firebase.google.com/docs?hl=es-419
[ReactJS]: https://react.dev/reference/react
[react-icons]: https://react-icons.github.io/react-icons/
[react-router]: reactrouter.com/en/main
[react-spinners-kit]: https://www.npmjs.com/package/react-spinners-kit
