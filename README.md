# Prácticas para Desarrollo Web en Entorno Cliente
Esta es una aplicación web que permite a los usuarios iniciar sesión y acceder a una página principal con enlaces a recursos útiles, ejercicios y una funcionalidad de cierre de sesión.

<h2>Indice</h2>
<ul>
  <li><a href="#introduccion">Introducción</a></li>
  <li><a href="#estructura">Estructura</a></li>
  <li><a href="#estilo">Estilo</a></li>
  <li><a href="#snippets">Snippets</a></li>
  <li><a href="#caracteristicas">Caracteristicas</a></li>
  <li><a href="#archivos">Estructura de archivos</a></li>
</ul>

<h2 id="introduccion">Introducción</h2>
<p>Trabajo realizado por Gonzalo Lázaro Zambrano</p>
<p>Entregas para la asignatura de Desarrollo Web en Entorno Cliente</p>
<p>Septiembre de 2024 </p>
<p>Licencia propia para uso exclusivamente educativo</p>

<h2 id="estructura">Estructura</h2>
<p>La web está dividida en 4 secciones:</p>
<ul>
  <li>Header</li>  
  <li>Barra de navegación</li>
  <li>Formulario/Login</li>
  <li>Ejercicios entregados</li>
  <li>Footer</li>
</ul>

<h2 id="estilo">Estilo de la página</h2>
<h3>Paleta de colores</h3>
![image](https://github.com/user-attachments/assets/db1af0cd-69c9-413b-92b5-89b5bbac15ae)

<h2 id="snippets">Code snippets</h2>
<p>Aún no he usado Snippets pero planeo introducirlos para las siguientes entregas</p>

<h2 id="caracteristicas">Características</h2>

- **Inicio de Sesión**: Los usuarios deben iniciar sesión con un nombre de usuario y contraseña.
- **Mensaje de Bienvenida**: Al iniciar sesión correctamente, se muestra un mensaje de bienvenida antes de redirigir a la página principal.
- **Barra de Navegación**: Incluye enlaces a:
  - W3Schools
  - Información sobre JavaScript
  - Documentación de Mozilla
- **Dropdown de Ejercicios Numbers**: Incluye dos ejercicios:
  - Mini Calculadora
  - Cambio de Base
- **Botón String**: Incluye el ejercicio de transformador de texto de string.
- **Cierre de Sesión**: Elimina el item creado y cierra la sesión redirigiéndote al Login.
- **Manejo de LocalStorage**: La aplicación crea un item loggedIn para mantener la sesión abierta.

<h2 id="archivos">Estructura de archivos</h2>

- `login.html`: Página de inicio de sesión.
- `ejercicios/`: Contiene los ejercicios de Number y en un futuro los de String.
  - `ejer01/`: Todo lo que tiene el ejercicio de la calculadora.
    - `calculadora.html`: Página de la mini calculadora.
    - `js/`: Carpeta que contiene los archivos JavaScript:
      - `calculadora.js`: Archivo js de la calculadora de number.
    - `css/`: Carpeta que contiene los estilos CSS.
      - `styles.css`: Archivo de estilos del login y en lo que se basan los demás archivos css.
  - `ejer02/`: Todo lo que tiene el ejercicio de cambio de base.
    - `js/`: Carpeta que contiene los archivos JavaScript:
      - `cambioBase.js`: Archivo js del cambio de base de number.
    -  `css/`: Carpeta que contiene los estilos CSS.
      - `styles.css`: Archivo de estilos del login y en lo que se basan los demás archivos css.
    - `cambioBase.html`: Página para el cambio de base.
  - `ejer03/`: Todo lo que tiene el ejercicio de string.
    - `js/`: Carpeta que contiene los archivos JavaScript:
      - `transformador.js`: Archivo js del transformador de texto de string.
    -  `css/`: Carpeta que contiene los estilos CSS.
      - `styles.css`: Archivo de estilos del login y en lo que se basan los demás archivos css.
    - `cambioBase.html`: Página para el transformador de texto.
- `css/`: Carpeta que contiene los estilos CSS.
  - `styles.css`: Archivo de estilos del login y en lo que se basan los demás archivos css.
- `js/`: Carpeta que contiene los archivos JavaScript:
  - `login.js`: Verifica el usuario y contraseña. Además contiene todas las demás funciones necesarias para el correcto funcionamiento del mismo.
- `img/`: Carpeta que contiene tanto el favicon como otras imágenes.
