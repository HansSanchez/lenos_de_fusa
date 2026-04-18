---
applyTo: "**"
---

# Git Instructions: Single Conventional Commit Message

## Objetivo

Quiero que generes _un único_ mensaje de commit que cumpla Conventional Commits v1.0.0, usando únicamente los cambios en staging (index). Si no hay cambios staged, primero debes añadirlos y después redactar el mensaje.

## Comandos para obtener contexto

Ejecuta estos comandos en este orden:

bash
git status --short
git diff --staged --name-status
git diff --staged

Si git status --short no muestra archivos staged, añade los cambios primero y vuelve a verificar:

bash
git add <ruta>

# o para incluir todo:

git add -A
git status --short

## Formato del mensaje

Formato exacto obligatorio:

<type>[optional scope][!]: <description>

Reglas de estructura:

- type es obligatorio y va en minúsculas.
- scope es opcional y va entre paréntesis, por ejemplo: (api-client).
- ! es opcional y solo se usa si hay breaking change.
- description es obligatoria, breve y en una sola línea.

## Tipos permitidos y cuándo usarlos

Usa el tipo que mejor represente el impacto principal del conjunto staged:

- feat: añade una funcionalidad visible para usuario o consumidor.
- fix: corrige un defecto o comportamiento incorrecto.
- docs: cambia solo documentación.
- style: cambios de formato sin impacto funcional (espacios, lint de estilo).
- refactor: reorganiza código sin cambiar comportamiento externo.
- perf: mejora rendimiento.
- test: añade o ajusta pruebas.
- build: cambios de build/dependencias/empaquetado.
- ci: cambios en pipelines o automatización CI/CD.
- chore: tareas de mantenimiento no incluidas arriba.
- revert: revierte un commit previo.

## Scope

Reglas para scope:

- Debe estar en kebab-case y sin espacios.
- Debe inferirse desde las rutas staged, tomando el módulo o área común dominante.
- Método genérico:
  - Si la mayoría de archivos staged cae en una carpeta/módulo claro, usa ese nombre normalizado a kebab-case.
  - Si afecta varias áreas sin una dominante clara, omite scope.
  - Si el cambio es transversal o global (sin módulo principal), omite scope.

## Reglas estrictas de redacción

Checklist obligatorio antes de confirmar el mensaje:

- El mensaje completo cumple exactamente: <type>[optional scope][!]: <description>.
- Hay un solo tipo, coherente con el impacto principal del diff staged.
- scope solo aparece si aporta precisión real; si no, se omite.
- description empieza en minúscula, en modo imperativo, sin punto final.
- description no incluye detalles de implementación, IDs de PR ni ruido.
- El mensaje final es de una sola línea.

## Breaking changes

Usa ! únicamente cuando los cambios staged introducen una ruptura incompatible para consumidores:

- Se elimina o renombra una API pública usada externamente.
- Se cambia un contrato (entradas/salidas) de forma no retrocompatible.
- Se modifica comportamiento esperado de forma que requiere cambios del consumidor.

No uses ! para refactors internos, cambios de tests o mantenimiento sin impacto incompatible externo.

## Plantilla final (copia y pega)

<type>[optional scope][!]: <description>
