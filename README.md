# AgroPro Solutions  
Proyecto web que exhibe productos agrícolas y permite a los usuarios consultar deficiencias de productos mediante un formulario conectado a Telegram. Además, incluye una calculadora interactiva y animaciones para mejorar la experiencia visual.  

## 🏗 Estructura del Proyecto  
📌 Frontend (`HTML, CSS y JavaScript`)  
- index.html ➝ Página principal con catálogo de productos y formulario de consulta.  
- guardar.html ➝ Formulario para registrar consultas sobre productos.  
- proplayers.html ➝ Sección informativa sobre jugadores (si aplica).  
- style.css ➝ Estilos de la interfaz.  
- animaciones.js ➝ Archivo que gestiona las animaciones al hacer scroll.  

📌 Calculadora (`Calculator/`)  
- index.html ➝ Página principal de la calculadora.  
- index.js ➝ Lógica de la calculadora.  
- Calculadora.js ➝ Módulo con funciones matemáticas.  
- Display.js ➝ Manejo de la interfaz de la calculadora.  
- estilo.css ➝ Estilos específicos para la calculadora.  
- img/ ➝ Contiene imágenes relacionadas con la calculadora.  

📌 Backend (`Telegram API`)  
- Se envían mensajes automáticamente a un chat de Telegram con la información del formulario de contacto.  

## 🔄 Flujo de Funcionamiento  
✅ 1. El usuario ingresa a `index.html` y revisa los productos disponibles.  
✅ 2. Mientras navega, los productos se animan dinámicamente con `animaciones.js`, mostrando una apariencia más fluida.  
✅ 3. En la sección de calculadora (`calculator/index.html`), el usuario puede realizar cálculos relacionados con productos agrícolas.  
✅ 4. Si tiene dudas sobre un producto, llena el formulario de consulta en `guardar.html` con sus datos.  
✅ 5. Al presionar "Enviar", la información es enviada a Telegram mediante una API.  

## ✨ Animaciones con animaciones.js  
El archivo animaciones.js mejora la experiencia del usuario aplicando efectos de entrada en los productos al hacer scroll.  
- Verifica cuándo un elemento está visible en el viewport.  
- Agrega transiciones suaves y efectos escalonados para mostrar los productos con un retraso progresivo.  
- Detecta el scroll del usuario y activa las animaciones de forma automática.  

## ⚙️ Tecnologías Usadas  
- HTML, CSS y JavaScript para la interfaz.  
- Node.js y Express para el backend.  
- Telegram API para enviar consultas automáticamente.
