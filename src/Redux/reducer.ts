import {
  ADD_NEW_TODO,
  COMPLETED_TODO,
  DELETE_TODO,
  DONE_EDITING,
  EDIT_MODE,
  SAVE_TODOS_DATA,
  UPDATE_TODO,
} from "./actions";
import { TODOS_ACTIONS } from "./types";

const TodosInitialState: InitialState = {
  todos: [],
  editableTodo: {
    id: 0,
    title: "",
  },
};

const reducer = (state = TodosInitialState, action: TODOS_ACTIONS) => {
  switch (action.type) {
    case SAVE_TODOS_DATA:
      return { ...state, todos: action.payload };
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const prevTodos = state.todos;
      const afterDelete = prevTodos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: afterDelete,
      };
    case EDIT_MODE:
      return {
        ...state,
        editableTodo: {
          ...state.editableTodo,
          id: action.payload.id,
          title: action.payload.todo,
        },
      };
    case UPDATE_TODO:
      return {
        ...state,
        editableTodo: { ...state.editableTodo, title: action.payload },
      };

    case DONE_EDITING:
      const todosBiforeEdit = [...state.todos];
      const updatedTodos = todosBiforeEdit.map((todo) => {
        if (todo.id === state.editableTodo.id) {
          return { ...todo, todo: state.editableTodo.title, completed: false };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
        editableTodo: { id: 0, title: "" },
      };
    case COMPLETED_TODO:
      const todos = [...state.todos];
      const completedTodos = todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { ...state, todos: completedTodos };

    default:
      return state;
  }
};

export default reducer;
