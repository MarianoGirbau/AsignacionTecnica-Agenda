# Agenda de Contactos - Desafío Técnico

Esta es una aplicación de agenda de contactos desarrollada con React, como parte de un desafío técnico.

Permite agregar, listar, editar y eliminar contactos, utilizando almacenamiento local (`localStorage`) para persistencia.

---

## Cómo ejecutar el proyecto

### 1. Cloná o descargá este repositorio:

```bash
git clone https://github.com/MarianoGirbau/asignaciontecnica-agenda.git
cd asignaciontecnica-agenda
```

### 2. Instalá las dependencias:

```bash
npm install
```

### 3. Ejecutá la app:

```bash
npm start
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

---

## Demo online

Podés probar la aplicación directamente en este enlace:

**[https://agendagirbau.netlify.app/](https://agendagirbau.netlify.app/)**

No requiere instalación ni registro.

---

## Cómo se usa

1. Completá el formulario con los datos del nuevo contacto:

   * Nombre
   * Apellido
   * Provincia
   * Teléfono

2. Hacé clic en **"Agregar contacto"** para guardarlo.

3. Los contactos se listan en una tabla debajo del formulario. Desde allí podés:

   * **Editar**: hace clic en el boton `Editar` para abrir un modal con los datos pre-cargados.
   * **Eliminar**: hace clic en el boton `Eliminar`. Aparecerá una confirmación antes de eliminar.

4. Los contactos se guardan en `localStorage`, por lo que **no se pierden al recargar la página**.

---

## Tecnologías utilizadas

* **React**
* **React-Bootstrap** (Para simplificar los estilos de la interfaz y el responsive)
* **SweetAlert2** (para notificaciones y confirmaciones)
* HTML, CSS, JavaScript (ES6+)

---

## Decisiones técnicas

* Se eligió **localStorage** por simplicidad, evitando dependencias de backend o bases de datos externas.
* Se usaron **modales con React-Bootstrap** para edición sin navegar fuera de la página.
* Cada contacto se gestiona mediante su posición en el array (`index`). En una versión futura, podría usarse un `id` único para mayor robustez.

---
## Contacto

Cualquier consulta técnica puede enviarse a:
[marianogirbau@gmail.com](mailto:marianogirbau@gmail.com)