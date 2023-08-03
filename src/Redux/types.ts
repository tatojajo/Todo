import {
  SAVE_TODOS_DATA,
  ADD_NEW_TODO,
  DELETE_TODO,
  EDIT_MODE,
  UPDATE_TODO,
  DONE_EDITING,
  COMPLETED_TODO,
} from "./actions";

export type SAVE_TODOS_DATA_ACTION = {
  type: typeof SAVE_TODOS_DATA;
  payload: Todo[];
};

export type ADD_NEW_TODO_ACTION = {
  type: typeof ADD_NEW_TODO;
  payload: Todo;
};

export type DELETE_TODO_ACTION = {
  type: typeof DELETE_TODO;
  payload: Todo;
};

export type EDIT_MODE_ACTION = {
  type: typeof EDIT_MODE;
  payload: Todo;
};

export type UPDATE_TODO_ACTION = {
  type: typeof UPDATE_TODO;
  payload: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
};

export type DONE_EDITING_ACTION = {
  type: typeof DONE_EDITING;
  payload: EditMode;
};

export type COMPLETED_TODO_ACTION = {
  type: typeof COMPLETED_TODO;
  payload:Todo
};

export type TODOS_ACTIONS =
  | SAVE_TODOS_DATA_ACTION
  | ADD_NEW_TODO_ACTION
  | DELETE_TODO_ACTION
  | EDIT_MODE_ACTION
  | UPDATE_TODO_ACTION
  | DONE_EDITING_ACTION
  |COMPLETED_TODO_ACTION;
