---
applyTo: ''
---
Quiero que generes la documentaciÃ³n de un Pull Request en Markdown siguiendo EXACTAMENTE estas instrucciones. El resultado debe mostrarse en un nuevo archivo externo.

Antes de escribir, identifica SIEMPRE el commit mas reciente (HEAD) del PR o rama actual. Ejecuta este comando y usa sus valores (hash, fecha, autor, mensaje) para la secciÃ³n de commits:
git log -1 --pretty=format:"%H%n%ad%n%an%n%s" --date=format:"%d %b %Y" HEAD
Si el comando falla o no devuelve datos, indica el problema y no inventes informaciÃ³n.

1. Idioma:
   - Usa espanol neutro orientado a documentaciÃ³n tÃ©cnica.

2. Formato:
   - Salida en *Markdown puro*, SIN etiquetas HTML.
   - NO envuelvas el resultado en html ni uses <html>, <body>, etc.
   - Respeta la estructura de tÃ­tulos y listas que te indico abajo.

3. Estructura obligatoria (NO agregues secciones adicionales):
   - Titulo de nivel 1: `# Pull Request: <titulo>`
   - SecciÃ³n `## DescripciÃ³n general`
   - SecciÃ³n `## Commits incluidos` con tabla Markdown (Fecha, Autor, Mensaje) usando unicamente el ultimo commit identificado con el comando anterior.
   - SecciÃ³n `## Cambios principales` con lista numerada, cada item con un titulo en **negrita** y bullets debajo.
   - SecciÃ³n `## Archivos modificados (selecciÃ³n relevante)` con bullets y descripciÃ³n corta por archivo/modulo.
   - SecciÃ³n `## Resumen linea/archivo` con la frase final en el formato:
     `**<N> adiciones** y **<M> eliminaciones** en total.`

4. Estilo del contenido:
   - Resume de forma clara y concreta los cambios funcionales y tÃ©cnicos.
   - Agrupa los cambios por tema/area (p.ej. "Flujo E2E", "ProgramaciÃ³n de sesiones", "Pruebas FAN", "ConfiguraciÃ³n y scripts").
   - No des recomendaciones, alternativas ni "notas adicionales" fuera de esas secciones.
   - No inventes datos: si no se ve el numero exacto de adiciones/eliminaciones o no esta claro, usa un texto tipo: `**X adiciones** y **Y eliminaciones** en total (segÃºn el diff disponible).`

5. Plantilla que debes seguir (rellÃ©nala tu con la informaciÃ³n que se obtenga del ultimo commit y del diff):

md
# Pull Request: <titulo corto y descriptivo>

## DescripciÃ³n general

<Resumen funcional en 1-3 pÃ¡rrafos: que problema se aborda, que se implementa o ajusta, y a que parte del sistema afecta.>

## Commits incluidos

| Fecha       | Autor        | Mensaje |
| ----------- | ------------ | ------- |
| <dd Mmm yyyy> | @<autor>  | <mensaje de commit> |
| ...         | ...          | ... |

## Cambios principales

1. *<area o tema 1>*

   * <detalle 1.1>
   * <detalle 1.2>

2. *<area o tema 2>*

   * <detalle 2.1>
   * <detalle 2.2>

3. *<area o tema 3>*

   * <detalle 3.1>
   * ...

## Archivos modificados (selecciÃ³n relevante)

* *<ruta/archivo 1>* - <breve descripciÃ³n del tipo de cambio.>
* *<ruta/archivo 2>* - <breve descripciÃ³n del tipo de cambio.>
* *<modulo o carpeta>* - <cuando agrupe varios archivos similares.>

## Resumen linea/archivo

*<N> adiciones* y *<M> eliminaciones* en total.
```

A continuaciÃ³n busca el diff, lista de commits o descripciÃ³n de cambios.
Con esa informaciÃ³n, genera UNICAMENTE la documentaciÃ³n siguiendo la estructuraÂ anterior.