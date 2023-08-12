Este proyecto simula un e-commerce de armería llamado Shot Gun para la entrega final del curso de React de CoderHouse.

- La página principal es el "Home" donde se puede apreciar banners con diferentes productos para poder acceder a la compra directa.
    Además se puede ingresar a la sección de enviar un mensaje directo al vendedor.
- El proyecto contiene una barra de navegación lateral la cual permite navegar por las distintas páginas
- En la sección "Productos" podemos ver el listado completo de todos lo que ofrece la armería
- Luego estan las secciones "Pistolas", "Revolveres", "Escopetas" y "Carabinas" en los cuales divide los productos por categorías o clase de armamento.
- Cada producto tiene su detalle, con su precio, modelo, marca y características. Además uno puede seleccionar la cantidad y agregarlo al carrito.
- En el detalle de un producto, uno puede seleccionar la cantidad y agregarlo al carrito.
-En el carrito de compras se pueden eliminar cada elemento o todos los elementos según cada caso.
-Cliqueando en "Finalizar Compra" en el carrito de compras, ya uno puede completar el formulario de checkout (llenando los datos del usuario, de envío y tarjeta de crédito) y efectuar finalmente la compra.

En este proyecto se hizo el uso de las siguientes herramientas:

- Utilización de Hooks como useState, UseParams, UseEffect, useNavigate y useContext
- El navBar esta linkeado por los componentes de React Router Dom (Link y NavLink)
- Se utilizan los componentes BrowserRouter, Routes, Route para crear las rutas de navegación por todo el e-commerce
- Implementación de rutas estáticas y dinámicas para navegar entre categorías de productos y también mediante ID para ingresar a un producto específico en particular.
- Aplicación de Firebase para cargar los productos del e-commerce.
- Utilización de promesas
- Utilización de funciones
- Aplicación de métodos map, find y filter para recorrer el array de objetos
- Aplicación de React Credit Cards para realizar la simulación de pago con tarjetas.
- Aplicación del hook useForm para cargar formularios.
- Utilización de SweetAlerts para una mayor interfaz de usuario.
- Aplicación funciones mendiante evento OnClick en el logo principal para redireccionar al HOME mediante el uso de useNavigate; y también para los botones de + - para agregar al carrito (ItemCount) y restringir las cantidades negativas y no sobrepasar el stock.
- Utilización de Bootstrap con Carousels y Breadcrumbs.
- Estilos mediante CSS, aplicación de grid, flex y variables.
