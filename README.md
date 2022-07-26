# Tienda de Libros

Esta es una aplicación construída con React JS. Es una tienda que expone un catálogo de libros online, 
y tiene las siguientes funcionalidades:


## Funcionalidades a construir

1. Catalogo de libros
    - Imagen
    - Titulo del libro
    - Link de detalle 
    - botón comprar
    - año de lanzamiento
    - Número de paginas

2. Página de detalle del libro
    - Imagen
    - Titulo del libro
    - Link de detalle 
    - botón comprar
    - año de lanzamiento
    - Número de paginas
    - Descripción

3. Carrito de compras
4. página de confirmación de productos y pago
5. Login / Logout
    - Boton Logout
    - Pagina de Login
    - Página de Registro
6. Scroll infinito
7. Buscador de libros:
    - Titulo
    - Autor
8. Filtro de busqueda combinada:
    - Autor
    - Titulo
    - Año de lanzamiento
9. Barra de navegación 

## Tecnologías a usar

1. React JS [Ver Detalles](https://reactjs.org/)
2. React Router DOM [Ver Detalles](https://www.npmjs.com/package/react-router-dom)
3. Formik [Ver Detalles](https://formik.org/)
4. Yup ( scheme validation ) [Ver Detalles](https://www.npmjs.com/package/yup)
5. Bootstrap v5.x.x [Ver Detalles](https://getbootstrap.com/)
6. Google Books API [Ver Detalles](https://developers.google.com/books/docs/overview)

# Documentación

## Componente React

Los componentes de react son bloques de código que encapsulan elementos HTML y lógica relacionada con el estado.
O en otras palabras encapsulan UI y Data.

**Estado:**
Información de interés para el usuario para la lógica de la aplicación, que está siendo procesada y almacenada en memoría RAM y que por ende es volátil. 

Al gestionar o manipular el estado, las buenas prácticas recomiendan hacerlo teniendo en cuenta algunos conceptos:

1. Debe ser predecible
    - Debe ser facil de saber entender el flujo de la información ( estado )
2. La información debe ser consistente
    - Siempre que ocupemos información, debemos obtener su versión más reciente
3. Global
    - Debe ser posible acceder a la información desde cualquier parte de la aplicación

