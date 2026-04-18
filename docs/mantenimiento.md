# Guía de mantenimiento

Documento práctico para ubicar rápido qué archivo modificar según el tipo de cambio.

## Responsabilidad por archivo

| Archivo o carpeta | Responsabilidad principal |
| --- | --- |
| `index.html` | Estructura general del sitio, textos, enlaces, secciones, formulario, mapa y footer |
| `css/main.css` | Estilos base, componentes, espaciados, hero, tarjetas, portafolio, footer y estados visuales |
| `css/responsive.css` | Ajustes por breakpoints para tablet y mobile |
| `css/colors/preset.css` | Color principal activo del tema |
| `js/main.js` | Inicialización de sliders, filtros, scroll, lightbox, contadores, loader y botón de retorno |
| `js/contact-form-script.js` | Validación local del formulario y mensajes al usuario |
| `js/color-switcher.js` | Panel de paletas y carga dinámica de colores |
| `img/` | Fotografías, fondos, logos e imágenes de secciones |
| `fonts/` | Iconografía y fuentes heredadas de la plantilla |

## Cambios frecuentes

### Cambiar textos o CTA

Edita `index.html`. Ahí están:

- el contenido del hero;
- los nombres y descripciones del menú;
- los testimonios;
- la información de contacto;
- los enlaces de navegación con anclas internas.

### Agregar o quitar una arepa del menú

Trabaja en la sección `#portfolios` dentro de `index.html`.

Debes revisar:

- la categoría visual del ítem (`tradicional`, `especial`, `mixta`);
- la imagen asociada en `img/portfolio/` o `img/slider/`;
- el `alt` de la imagen;
- el texto visible y el enlace de lightbox.

### Cambiar colores de marca

El color dominante actual está centralizado en `css/colors/preset.css`. Si cambias el tono principal, valida también contraste y estados hover.

### Ajustar estilos generales

Usa `css/main.css` para cambios de componentes y `css/responsive.css` para corregir visualización en pantallas pequeñas.

### Cambiar comportamiento del formulario

El flujo actual está en `js/contact-form-script.js`.

Comportamiento actual:

- bloquea el envío nativo del formulario;
- valida campos obligatorios;
- muestra error visual si faltan datos;
- limpia el formulario y confirma solo en frontend si todo está completo.

Si quieres recibir pedidos reales, este es el punto donde debes conectar una API, un correo transaccional o una integración de mensajería.

## Componentes heredados o a revisar

Hay indicios de recursos heredados de una plantilla original que hoy no son parte central del flujo visible:

- `js/map.js` existe, pero el mapa actual se resuelve desde un `object` embebido en `index.html`.
- `js/menu.js` existe, pero no se carga desde `index.html`.
- `classie.js`, `jquery.vide.js` y `form-validator.min.js` siguen cargándose; conviene revisar si siguen siendo necesarios antes de eliminarlos.

La recomendación es no borrar estos archivos sin una verificación funcional completa en navegador.

## Checklist antes de publicar cambios

- Revisar la navegación por anclas desde el menú principal.
- Verificar que carrusel, filtros y lightbox sigan funcionando.
- Probar la vista mobile.
- Confirmar que el formulario muestre mensajes correctos.
- Revisar que todas las imágenes carguen y tengan texto alternativo coherente.
