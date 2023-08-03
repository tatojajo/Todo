import React, { useEffect } from "react";
import axios from "axios";

import { useTodoSelector, useTodoDispatch } from "../Redux/hooks";

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import {
  activateEditMode,
  completedTodo,
  deleteTodo,
  doneEditing,
  saveTodosData,
  updateTodoValue,
} from "../Redux/actions";
import { Delete, DoneAll, DoneTwoTone, Edit } from "@mui/icons-material";
import TodosInput from "./TodosInput";
import { TodoBtns, TodosContainer } from "./Todo.Style";

const Todos = () => {
  const dispatch = useTodoDispatch();
  const { todos, editableTodo } = useTodoSelector((state) => state);

  const handleCompletedTodo = (todo: Todo) => {
    dispatch(completedTodo(todo));
  };

  const handleEditableTodo = async (editableTodo: Todo) => {
    dispatch(activateEditMode(editableTodo));
  };

  const handleTodoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(updateTodoValue(e.target.value));
  };

  const handleEditDone = async (editiedTodo: EditMode) => {
    const { data } = await axios.put(
      `https://dummyjson.com/todos/${editableTodo.id}`,
      {
        todo: editableTodo.title,
      }
    );
    dispatch(doneEditing(data));
  };

  const deleteRequest = async (todoToDelete: Todo) => {
    const { data } = await axios.delete(
      `https://dummyjson.com/todos/${todoToDelete.id}`
    );
    dispatch(deleteTodo(data));
  };

  useEffect(() => {
    const getTodos = async () => {
      const {
        data: { todos },
      } = await axios.get("https://dummyjson.com/todos?limit=5");
      dispatch(saveTodosData(todos));
      console.log(todos)
    };
    getTodos();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="h2" color="initial">
          My Tasks
        </Typography>
      </Box>
      <TodosContainer>
        <Box>
          <TodosInput />
        </Box>
        <List>
          {todos.map((todo) => {
            return editableTodo.id === todo.id ? (
              <Box
                key={todo.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  style={{
                    width: "80%",
                  }}
                  label="Editable Todo"
                  value={editableTodo.title}
                  onChange={(e) => handleTodoChange(e)}
                />
                <Button
                  sx={{
                    padding: "12px",
                  }}
                  variant="contained"
                  onClick={() => handleEditDone(editableTodo)}
                >
                  Done
                  <DoneAll />
                </Button>
              </Box>
            ) : (
              <ListItem key={todo.id}>
                <ListItemText
                  style={{ textDecoration: todo.completed && "line-through" }}
                >
                  {todo.todo}
                </ListItemText>
                <TodoBtns>
                  <ListItemButton onClick={() => deleteRequest(todo)}>
                    <Delete />
                  </ListItemButton>
                  <ListItemButton onClick={() => handleEditableTodo(todo)}>
                    <Edit />
                  </ListItemButton>
                  <ListItemButton onClick={() => handleCompletedTodo(todo)}>
                    <DoneTwoTone />
                  </ListItemButton>
                </TodoBtns>
              </ListItem>
            );
          })}
        </List>
      </TodosContainer>
    </Box>
  );
};

export default Todos;
