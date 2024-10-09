# Todo App

Este proyecto es una aplicación de gestión de tareas desarrollada con React utilizando el hook `useReducer` para manejar el estado global de la aplicación. La aplicación permite crear, editar, eliminar y reiniciar una lista de tareas, todo almacenado en `localStorage` para persistencia de datos. 

Para ver la aplicación da click [aquí](https://macarenacavieres.github.io/tareas-ts/)

## Características

- **Agregar tareas**: Permite agregar una nueva tarea a la lista.
- **Editar tareas**: Posibilidad de editar tareas ya creadas.
- **Eliminar tareas**: Funcionalidad para eliminar tareas.
- **Reiniciar la lista de tareas**: Borrar todas las tareas de la lista.
- **Persistencia**: Las tareas se almacenan en el `localStorage` para que se mantengan entre recargas de la página.

## Tecnologías Utilizadas

- **React**: Se utiliza `useReducer` y `useEffect` para manejar el estado y los efectos secundarios.
- **Tailwind CSS**: Para los estilos y diseño responsivo.
- **TypeScript**: Para mejorar la calidad del código mediante tipado estático.
- **UUID**: Se usa para generar identificadores únicos para cada tarea.
- **LocalStorage**: Para persistir las tareas en el navegador.

## Estructura del Proyecto

```md
src/
│
├── components/
│   ├── Form.tsx           - Formulario para agregar/editar tareas
│   ├── TodoList.tsx       - Listado de tareas con opciones de edición y eliminación
│
├── reducers/
│   └── todo-reducer.ts    - Lógica del reducer para manejar el estado global de las tareas
│
├── types/
│   └── index.ts           - Definición de tipos utilizados en la aplicación
│
├── App.tsx                - Componente principal que integra el formulario y la lista de tareas
├── index.tsx              - Punto de entrada de la aplicación
```


## Instalación y Ejecución

Sigue estos pasos para ejecutar la aplicación localmente:

1. Clona el repositorio:
```bash
git clone https://github.com/MacarenaCavieres/tareas-ts.git
```

2. Navega al directorio del proyecto
```bash
cd todo-app
```

3. Instala las dependencias
```bash
npm install
```

4. Inicia el servidor:
```bash
npm start
```

## Funcionalidad

### Formulario de Tareas
El componente `Form.tsx` permite agregar nuevas tareas o editar las existentes. Usa el hook `useState` para manejar el estado del formulario localmente y `useEffect` para cargar la tarea seleccionada cuando el usuario edita una tarea existente.

### Listado de Tareas
El componente `TodoList.tsx` muestra todas las tareas agregadas. Cada tarea tiene un botón para editarla o eliminarla. Usa el hook `useMemo` para comprobar si la lista de tareas está vacía.

### Reducer de Tareas
El archivo `todo-reducer.ts` define las acciones que se pueden realizar sobre el estado de las tareas:
- `save-todo`: Guarda una nueva tarea o edita una existente.
- `set-activeId`: Establece la tarea activa para ser editada.
- `delete-todo`: Elimina una tarea específica.
- `clear-todos`: Elimina todas las tareas.

### Tipos
En el archivo `types/index.ts` se define el tipo `Todo`, que representa la estructura de una tarea con un identificador y un nombre.


## Autor

Desarrollado por [MCavieres](https://www.linkedin.com/in/macarena-cavieres-rubio/)