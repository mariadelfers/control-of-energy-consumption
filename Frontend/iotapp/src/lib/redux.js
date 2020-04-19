import { createStore } from 'redux';

// Las acciones son los "nombres" de los cambios que pueden ocurrir en el store.
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
};

// Los creadores de acciones son la forma en que se agrupan las acciones con los datos necesarios para ejecutarlas.
export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });

// Todos nuestros reducers simplemente cambian el estado de una sola tarea.
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

// El reducer describe como los contenidos del store cambian por cada acción.
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case actions.PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
    default:
      return state;
  }
};

// El estado inicial de nuestro store cuando la app carga.
// Usualmente obtendrías esto de un servidor.
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

// Exportamos el store de redux construido.
export default createStore(reducer, { tasks: defaultTasks });