# Feliz-cumple — para mamá

Una dedicatoria de cumpleaños para mamá, hecha con HTML, CSS y JavaScript vanilla. Funciona directamente en el navegador y se puede alojar en GitHub Pages.

## Ejecutar localmente

Abre `index.html` en tu navegador. Para probarlo con un servidor local, desde la carpeta del proyecto ejecuta `python -m http.server 8000` y visita `http://localhost:8000`.

## Personalizar

- **Fotografías:** la galería ya utiliza las imágenes guardadas en `assets/images/`. Mantén las rutas relativas y los textos `alt` descriptivos si actualizas una foto.
- **Música:** coloca tu archivo MP3 propio o autorizado como `assets/music/birthday-song.mp3`. El botón se habilita cuando el navegador puede cargarlo; la reproducción requiere interacción.
- **Dedicatoria:** el saludo y la carta están en `index.html`, en `#celebracion` y `.letter-body`.
- **Fecha y detalles:** modifica el pequeño rótulo del hero y el pie final directamente en `index.html`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube los archivos de esta carpeta a la rama principal (por ejemplo, `main`).
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, elige `main` y la carpeta `/ (root)`, y guarda.
4. Espera a que termine la publicación. GitHub mostrará la URL del sitio en la misma página de configuración.

Las rutas de recursos son relativas para que funcionen también en un sitio de proyecto. No se ha publicado ni modificado ningún repositorio remoto.
