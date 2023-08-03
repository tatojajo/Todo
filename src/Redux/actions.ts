import { TODOS_ACTIONS } from "./types";

export const SAVE_TODOS_DATA = "SAVE_TODOS_DATA";
export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_MODE = "EDIT_MODE";
export const UPDATE_TODO = "UPDATE_TODO";
export const DONE_EDITING = "DONE_EDITING";
export const COMPLETED_TODO = "COMPLETED_TODO";

export const saveTodosData = (todos: Todo[]): TODOS_ACTIONS => ({
  type: SAVE_TODOS_DATA,
  payload: todos,
});

export const addNewTodo = (newTodo: Todo): TODOS_ACTIONS => ({
  type: ADD_NEW_TODO,
  payload: newTodo,
});

export const deleteTodo = (todoToDelete: Todo): TODOS_ACTIONS => ({
  type: DELETE_TODO,
  payload: todoToDelete,
});

export const activateEditMode = (todoToEdit: Todo): TODOS_ACTIONS => ({
  type: EDIT_MODE,
  payload: todoToEdit,
});

export const updateTodoValue = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
): TODOS_ACTIONS => ({
  type: UPDATE_TODO,
  payload: event,
});

export const doneEditing = (editedTodo: EditMode): TODOS_ACTIONS => ({
  type: DONE_EDITING,
  payload: editedTodo,
});


export const completedTodo = (todo:Todo): TODOS_ACTIONS =>({
  type: COMPLETED_TODO,
  payload:todo
})