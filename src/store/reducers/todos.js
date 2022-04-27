import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = "todos";

export const getTodos = createAsyncThunk(`${name}/getTodos`, async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return data;
});

export const createTodo = createAsyncThunk(
  `${name}/createTodo`,
  async (todo) => {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      todo
    );
    return data;
  }
);

export const updateTodo = createAsyncThunk(
  `${name}/updateTodo`,
  async (todo) => {
    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo
    );
    return data;
  }
);

export const deleteTodo = createAsyncThunk(
  `${name}/deleteTodo`,
  async (todo) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
    return todo;
  }
);

const todosSlice = createSlice({
  name,
  initialState: {
    loading: false,
    todos: [],
    error: null,
  },
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getTodos.pending, (state, action) => {
      state.loading = true;
    });
    addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    });
    addCase(getTodos.rejected, (state, action) => {
      state.error = action.payload.data;
      state.loading = false;
    });

    addCase(createTodo.pending, (state, action) => {
      state.loading = true;
    });
    addCase(createTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.loading = false;
    });
    addCase(createTodo.rejected, (state, action) => {
      state.error = action.payload.data;
      state.loading = false;
    });

    addCase(updateTodo.pending, (state, action) => {
      state.loading = true;
    });
    addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      state.loading = false;
    });
    addCase(updateTodo.rejected, (state, action) => {
      state.error = action.payload.data;
      state.loading = false;
    });

    addCase(deleteTodo.pending, (state, action) => {
      state.loading = true;
    });
    addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.loading = false;
    });
    addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.payload.data;
      state.loading = false;
    });
  },
});

export default todosSlice.reducer;
