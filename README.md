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
Para crear un Worker en Cloudflare, sigue estos pasos:

1. **Crear una cuenta en Cloudflare**  
   Si aún no tienes una cuenta, regístrate en [Cloudflare](https://workers.cloudflare.com).

2. **Instalar Wrangler**  
   Wrangler es la herramienta CLI de Cloudflare para gestionar Workers. Instálala con:
   ```sh
   npm install -g wrangler
   ```
   Asegúrate de tener Node.js instalado antes de ejecutar este comando.

3. **Configurar un nuevo proyecto**  
   Usa el siguiente comando para crear un nuevo Worker:
   ```sh
   wrangler init my-worker
   ```
   Luego, accede al directorio del proyecto:
   ```sh
   cd my-worker
   ```

4. **Editar el código del Worker**  
   Abre el archivo `src/index.js` y modifica el código según tus necesidades. Un ejemplo básico:
   ```js
   export default {
     async fetch(request) {
       return new Response("¡Hola desde Cloudflare Workers!", {
         headers: { "Content-Type": "text/plain" },
       });
     },
   };
   ```

5. **Probar el Worker localmente**  
   Ejecuta:
   ```sh
   wrangler dev
   ```
   Esto iniciará un servidor local para probar el Worker antes de desplegarlo.

6. **Desplegar el Worker**  
   Cuando estés listo para publicarlo, usa:
   ```sh
   wrangler publish
   ```
   Esto lo desplegará en la red global de Cloudflare.

Para más detalles, puedes consultar la [documentación oficial de Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/)[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://developers.cloudflare.com/workers/get-started/guide/?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1"). También puedes ver este [curso en video](https://www.youtube.com/watch?v=H7Qe96fqg1M) que explica paso a paso cómo crear y desplegar un Worker[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://www.youtube.com/watch?v=H7Qe96fqg1M&citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "2").
