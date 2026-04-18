# Diagramas de documentación

Este documento resume la estructura funcional y técnica del proyecto actual.

## 1. Mapa de la página

```mermaid
flowchart TD
    A[Usuario] --> B[Navbar fija]
    B --> C[Inicio / Hero Carousel]
    B --> D[Lo nuestro]
    B --> E[Por qué vuelven]
    B --> F[Menú de arepas]
    B --> G[Favoritas]
    B --> H[Familia]
    B --> I[Haz tu pedido]
    B --> J[Contacto]

    C --> D
    D --> E
    E --> F
    F --> G
    G --> K[Contadores]
    K --> L[Testimonios]
    L --> H
    H --> I
    I --> M[Blog / Antojo]
    M --> J
    J --> N[Mapa embebido]
    N --> O[Footer]
```

## 2. Arquitectura de archivos y dependencias

```mermaid
flowchart LR
    Browser[Navegador] --> HTML[index.html]

    HTML --> CSS[CSS]
    HTML --> JS[JavaScript]
    HTML --> IMG[Imágenes]
    HTML --> MAP[Google Maps embebido]

    CSS --> B[bootstrap.min.css]
    CSS --> M[main.css]
    CSS --> R[responsive.css]
    CSS --> P[colors/preset.css]
    CSS --> FONTS[fonts/]

    JS --> JQ[jquery-min.js]
    JS --> CORE[js/main.js]
    JS --> FORM[js/contact-form-script.js]
    JS --> SWITCH[js/color-switcher.js]
    JS --> PLUGINS[Carousel, MixItUp, WOW, Lightbox, Scroll]

    CORE --> NAV[Navegación one-page]
    CORE --> CAR[Carruseles y animaciones]
    CORE --> FILTRO[Filtro del menú]
    CORE --> UI[Loader y botón volver arriba]

    FORM --> CONTACTO[Validación local del formulario]
```

## 3. Flujo del formulario de pedidos

```mermaid
sequenceDiagram
    participant U as Usuario
    participant F as #contactForm
    participant JS as contact-form-script.js
    participant MSG as #msgSubmit

    U->>F: Completa nombre, teléfono, pedido y mensaje
    U->>F: Envía solicitud
    F->>JS: submit
    JS->>JS: trim() y validación de campos

    alt Falta información
        JS->>F: Aplica animación de error
        JS->>MSG: Muestra mensaje de validación
    else Formulario completo
        JS->>F: reset()
        JS->>MSG: Muestra confirmación local
    end

    Note over JS,MSG: No existe envío a backend en la versión actual
```

## 4. Flujo de personalización de contenido

```mermaid
flowchart TD
    A[Necesidad de cambio] --> B{Tipo de cambio}
    B -->|Textos, secciones, enlaces| C[index.html]
    B -->|Colores y componentes| D[css/main.css]
    B -->|Color de marca| E[css/colors/preset.css]
    B -->|Responsive| F[css/responsive.css]
    B -->|Formulario| G[js/contact-form-script.js]
    B -->|Fotos o logos| H[img/]

    C --> I[Validar anclas y navegación]
    D --> J[Revisar desktop y mobile]
    E --> J
    F --> J
    G --> K[Probar mensajes de éxito y error]
    H --> J
```
