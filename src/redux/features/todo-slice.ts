
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "@/models/todo.model";

type InitialState = {
    value: Todo
}

const initialState = {
    value: {
        id: 0,
        todo: "",
        completed: false,
        userId: 0
    } as Todo,
} as InitialState

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>)=> {
            return {
                value: {
                    id: 999,
                    todo: "test",
                    completed: true,
                    userId: 899
                }
            };
        }
    }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer