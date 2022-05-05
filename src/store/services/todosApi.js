import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: ({ query, mutation }) => ({
    getTodos: query({
      query: () => "todos",
      transformResponse: (response) => response.slice(0, 10),
    }),
    createTodo: mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: todo,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: todo } = await queryFulfilled;
          dispatch(
            todosApi.util.updateQueryData("getTodos", undefined, (data) => [
              ...data,
              { ...todo, id: todo.id + getId() },
            ])
          );
        } catch {}
      },
    }),
    updateTodo: mutation({
      query: ({ id, ...todo }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: todo,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: todo } = await queryFulfilled;
          dispatch(
            todosApi.util.updateQueryData("getTodos", undefined, (data) =>
              data.map((t) => (t.id === todo.id ? todo : t))
            )
          );
        } catch {}
      },
    }),
    deleteTodo: mutation({
      query: ({ id }) => ({ url: `todos/${id}`, method: "DELETE" }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            todosApi.util.updateQueryData("getTodos", undefined, (data) =>
              data.filter((todo) => todo.id !== id)
            )
          );
        } catch {}
      },
    }),
  }),
});

// increments id since service always returns 201 as the id
function getId() {
  getId.id = getId.id || 0;
  return getId.id++;
}

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
export default todosApi;

/**
The setup above is not a part where RTK useQuery/useMutation is similar
to ApolloClient. I included the snippet below as an example of how GraphQL
queries might be written to acheive the same result if we were to use
GraphQL and ApolloClient.

const GET_TODOS = gql`
  query Todos {
    todos {
      id
      title
      completed
    }
  }
`;

const CREATE_TODO = gql`
  mutation CreateTodo(todo: TodoInput!) {
    createTodo(todo: $todo) {
      id
      title
      completed
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo(todo: TodoInput!) {
    updateTodo(todo: $todo) {
      id
      title
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo(id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

 */
