# un día especial

Una página de cumpleaños estática hecha con HTML, CSS y JavaScript vanilla. Funciona directamente en el navegador y se puede alojar en GitHub Pages.

## Ejecutar localmente

Abre `index.html` en tu navegador. Para probarlo con un servidor local, desde la carpeta del proyecto ejecuta `python -m http.server 8000` y visita `http://localhost:8000`.

## Personalizar

- **Fotografías:** coloca tus imágenes en `assets/images/` (por ejemplo, `foto-1.jpg`). En `index.html`, cada tarjeta tiene un bloque `.photo-art`; reemplaza ese bloque por una imagen `<img src="assets/images/foto-1.jpg" alt="Descripción de la foto">`. Ajusta las proporciones con las clases `photo-tall`, `photo-wide` y `photo-small`.
- **Música:** coloca tu archivo MP3 propio o autorizado como `assets/music/birthday-song.mp3`. El botón se habilita cuando el navegador puede cargarlo; la reproducción requiere interacción.
- **Mensaje:** edita el saludo en la sección `#celebracion` y el texto provisional dentro de `.letter-body` en `index.html`. Reemplaza también la firma genérica por la que quieras.
- **Fecha y detalles:** modifica el pequeño rótulo del hero y el pie final directamente en `index.html`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube los archivos de esta carpeta a la rama principal (por ejemplo, `main`).
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, elige `main` y la carpeta `/ (root)`, y guarda.
4. Espera a que termine la publicación. GitHub mostrará la URL del sitio en la misma página de configuración.

Las rutas de recursos son relativas para que funcionen también en un sitio de proyecto. No se ha publicado ni modificado ningún repositorio remoto.
