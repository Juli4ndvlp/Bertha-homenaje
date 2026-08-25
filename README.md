# Bertha-homenaje
Tributo a Bertha 🕯️

Una página web conmemorativa creada como homenaje a Bertha, en lo que sería su cumpleaños número 79. El proyecto reúne fotografías familiares en un álbum digital de estilo sobrio y elegante, con animaciones sutiles y un diseño inspirado en papel envejecido.

Índice
Sobre el proyecto
Vista previa
Estructura del proyecto
Tecnologías utilizadas
Cómo ver la página
Cómo desplegarla en GitHub Pages
Personalización
Rendimiento y peso del archivo
Consideraciones de privacidad
Licencia
Agradecimientos
Sobre el proyecto

Este repositorio contiene una página HTML de una sola pieza (single-file), autocontenida, pensada para preservar y compartir recuerdos familiares. No depende de ningún servidor, base de datos ni framework: todas las fotografías están incrustadas directamente en el archivo como imágenes codificadas en Base64, por lo que el sitio funciona sin conexión y puede abrirse directamente en cualquier navegador con solo hacer doble clic.

La página está organizada en cuatro secciones:

Portada (Hero) — nombre, fecha y una frase de apertura sobre fondo fotográfico.
Texto de homenaje — un párrafo escrito especialmente para la ocasión.
Álbum familiar — una galería de nueve fotografías con estética de fotografías pegadas en un álbum antiguo.
Cierre — un mensaje final y una firma familiar.
Vista previa

El archivo principal es tributo-bertha.html. Al abrirlo verás una paleta de tonos cálidos (marfil, dorado envejecido, sepia) y tipografía serif, con una vela animada en la portada y un pequeño efecto de inclinación en cada fotografía, simulando un álbum físico.

Estructura del proyecto
.
├── tributo-bertha.html   # Página completa (HTML + CSS + imágenes embebidas)
└── README.md             # Este archivo

No hay carpetas de imágenes separadas: todas las fotografías viven dentro del propio HTML como data:image/jpeg;base64,..., lo que simplifica el repositorio a un único archivo autosuficiente.

Tecnologías utilizadas
HTML5 — estructura semántica de la página.
CSS3 — todo el diseño vive en un bloque <style> interno:
Variables CSS (:root) para la paleta de color.
grid con auto-fit para una galería responsiva.
@keyframes para la animación de la llama de la vela.
clamp() para tipografía fluida entre dispositivos.
SVG en línea — para la vela, la llama y los adornos decorativos (florituras), sin depender de librerías de íconos externas.
Sin JavaScript, sin frameworks, sin dependencias externas — el archivo funciona igual online, offline, o abierto localmente.
Cómo ver la página

Opción 1 — Localmente:

Clona o descarga el repositorio.
Haz doble clic en tributo-bertha.html, o ábrelo desde tu navegador con Ctrl/Cmd + O.

Opción 2 — Con un servidor local (opcional):

bash
# Con Python
python3 -m http.server 8000

# Luego visita
http://localhost:8000/tributo-bertha.html
Cómo desplegarla en GitHub Pages

Si quieres tener un enlace web público para compartir con la familia:

Crea un repositorio nuevo en GitHub (puede ser privado o público).
Sube tributo-bertha.html (puedes renombrarlo a index.html para que cargue directamente en la raíz).
Ve a Settings → Pages.
En Source, selecciona la rama main y la carpeta / (root).
Guarda los cambios. GitHub generará una URL como:
  (https://github.com/Juli4ndvlp/Bertha-homenaje)
Espera uno o dos minutos y el sitio estará disponible.

Si prefieres mantenerlo privado solo para la familia, puedes dejar el repositorio en privado y compartir el archivo HTML directamente en lugar de publicarlo con Pages (GitHub Pages en repos privados requiere un plan de pago).

Personalización

Todo el contenido editable está claramente separado del código de diseño:

Nombre y fechas: busca <h1>Bertha</h1> y la línea <div class="dates"> en la sección .hero.
Frase de apertura (epitafio): dentro de <p class="epitaph">.
Texto del homenaje: en la sección <section class="tribute">.
Fotografías y pies de foto: cada imagen está dentro de un <div class="frame"> con su atributo alt describiendo la escena; el texto visible bajo cada foto se controla en la clase .cap (actualmente oculto por defecto, pero preparado en el CSS por si quieres activarlo).
Mensaje final y firma: en <section class="closing">.
Paleta de colores: todos los tonos están centralizados en las variables :root al inicio del <style> (--parchment, --ink, --gold, --sage, --rose), así que cambiar un color ahí lo actualiza en toda la página.

Para añadir o quitar fotografías, simplemente agrega o elimina un bloque <div class="frame">...</div> dentro de <div class="album">, con una nueva imagen en formato data:image/jpeg;base64,....

Rendimiento y peso del archivo

Como las imágenes están incrustadas en Base64 dentro del propio HTML, el archivo pesa más que una página típica (aproximadamente 1.5 MB en esta versión), pero a cambio:

No requiere hosting de imágenes por separado.
No se rompen enlaces si mueves el archivo.
Funciona sin conexión a internet.

Si en el futuro decides optimizar el peso, puedes:

Comprimir aún más las imágenes antes de convertirlas a Base64.
Separar las imágenes en una carpeta /img y referenciarlas con rutas relativas en lugar de Base64 (reduce el tamaño del HTML pero añade dependencia de archivos externos).
Consideraciones de privacidad

Este repositorio contiene fotografías familiares. Si decides subirlo a un repositorio público en GitHub, ten en cuenta que cualquier persona podrá ver las imágenes y los nombres incluidos en la página. Si prefieres mantener la privacidad, considera:

Usar un repositorio privado.
Compartir el archivo .html directamente (por correo, WhatsApp, USB) en lugar de publicarlo en la web.
Licencia

Este proyecto es de uso personal y familiar. El código (HTML/CSS) puede reutilizarse y adaptarse libremente para homenajes similares. Las fotografías incluidas son propiedad de la familia y no deben redistribuirse fuera de este contexto.

Agradecimientos

Hecho con cariño en memoria de Bertha, para que su historia siga contándose cada 24 de agosto.
