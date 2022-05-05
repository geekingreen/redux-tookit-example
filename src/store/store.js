import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";
import todos from "./reducers/todos";
import todosApi from "./services/todosApi";

export const store = configureStore({
  reducer: {
    counter,
    todos,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
