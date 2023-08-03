import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { RootState, TodoDispatch } from "./store";

export const useTodoDispatch = () => useDispatch<TodoDispatch>();
export const useTodoSelector: TypedUseSelectorHook<RootState> = useSelector;
