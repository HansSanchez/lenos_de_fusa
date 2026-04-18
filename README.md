# LEÑOS DE FUSA

Sitio web estático de una marca familiar de arepas rellenas en Fusagasugá. El proyecto está construido como landing page de una sola página y hoy funciona sin proceso de build ni backend.

## Objetivo

El sitio busca:

- presentar la propuesta de valor del negocio;
- mostrar el menú y las arepas destacadas;
- reforzar confianza con testimonios, familia y contacto;
- recibir solicitudes desde un formulario simple.

## Stack actual

- HTML5 en `index.html`
- CSS con Bootstrap, estilos base, responsividad y paletas de color
- JavaScript con jQuery y plugins de interfaz
- recursos estáticos en `img/` y `fonts/`

## Estructura del proyecto

```text
.
|-- css/
|   |-- colors/
|   |-- bootstrap.min.css
|   |-- main.css
|   `-- responsive.css
|-- docs/
|   |-- diagramas.md
|   `-- mantenimiento.md
|-- fonts/
|-- img/
|-- js/
|   |-- contact-form-script.js
|   |-- main.js
|   `-- plugins y librerías auxiliares
|-- .gitignore
|-- index.html
`-- license.txt
```

## Secciones principales del sitio

- `#slider-area`: hero con navbar y carrusel principal
- `#services`: propuesta de valor
- `#features`: razones para volver
- `#portfolios`: menú filtrable de arepas
- `#pricing`: favoritas de la casa
- bloques intermedios: contadores, testimonios y logos
- `#team`: familia o equipo
- `#subscribe`: formulario de pedido
- `#blog`: momentos de consumo
- `#contact`: contacto y llamada a la acción
- `#google-map-area` y footer

## Cómo ejecutar localmente

No hay instalación de dependencias.

Para una revisión rápida puedes abrir `index.html` directamente en el navegador. Si prefieres evitar restricciones de archivos locales, levanta un servidor estático:

```bash
python -m http.server 8080
```

Luego abre `http://localhost:8080`.

## Personalización rápida

- Textos, secciones, enlaces e imágenes: `index.html`
- Estilos principales: `css/main.css`
- Ajustes responsivos: `css/responsive.css`
- Color principal activo: `css/colors/preset.css`
- Comportamiento de sliders, filtros y scroll: `js/main.js`
- Validación del formulario: `js/contact-form-script.js`

## Estado actual del formulario

El formulario de `#subscribe` valida campos en cliente y muestra mensajes en pantalla, pero no envía datos a un servidor. Si el proyecto necesita recibir pedidos reales, hace falta conectar un endpoint, servicio de correo o integración con WhatsApp.

## Documentación adicional

- [Diagramas del proyecto](docs/diagramas.md)
- [Guía de mantenimiento](docs/mantenimiento.md)

## Notas técnicas

- `js/color-switcher.js` inyecta una paleta de colores en tiempo de ejecución.
- El mapa actual está embebido con un `object` de Google Maps desde `index.html`.
- Existen archivos heredados de la plantilla original, como `js/map.js` y `js/menu.js`, que no forman parte del flujo visible actual del sitio.
