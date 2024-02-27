
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "@/models/todo.model";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/'}),
    endpoints: (builder) => ({
        getAllTodo: builder.query<Todo[],void>({
            query: ()=> `todos`
        })
    })
})

export const {useGetAllTodoQuery} = todoApi