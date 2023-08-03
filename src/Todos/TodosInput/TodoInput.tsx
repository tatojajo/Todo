import React, { useState } from "react";
import { useTodoDispatch } from "../../Redux/hooks";

import axios from "axios";
import { addNewTodo } from "../../Redux/actions";

import { TodoInput } from "../Todo.Style";
import { Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import useDebounce from "../../Helper/useDebounce";

const TodosInput = () => {
  const [value, setValue] = useState("");
  const debounceValue  = useDebounce(value, 500)
  const dispatch = useTodoDispatch();

  const createNewTodo = async () => {
    if (value) {
      const { data } = await axios.post(`https://dummyjson.com/todos/add`, {
        todo: debounceValue,
        completed: false,
        userId: 5,
      });
      dispatch(addNewTodo(data));
      setValue('')
    }
  };

  return (
    <TodoInput>
      <TextField
        variant="standard"
        label="New Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="outlined"
        color="success"
        sx={{
          padding: "11px",
        }}
        onClick={createNewTodo}
      >
        Add <Add />
      </Button>
    </TodoInput>
  );
};

export default TodosInput;
