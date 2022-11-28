import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import InputSection from "./InputSection";
import TodoList from "./TodoList";
import TodoReducer from "../Reducers/TodoReducer";
import TodoContext from "../Contexts/TodoContext";
import TodoAxios from "../Axios/TodoAxios";
import Loading from "./Loading";

export default function Home() {
    const [state, dispatch] = useReducer(TodoReducer, {
        auth: false,
        todos: [],
        loading: true
    });

    useEffect(() => {
        TodoAxios.get('todos.json')
            .then(res => {
                let todos = Object.entries(res.data).map(([id, value]) => {
                    return { ...value, id };
                });
                state.loading = false;
                dispatch({ type: 'initialTodo', payload: { todos } });
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <TodoContext.Provider value={
            {
                dispatch,
                state
            }
        }>
            <div className="App">
                {state.loading ? <Loading /> : ''}
                <Header />
                <main>
                    <InputSection />
                    <TodoList />
                </main>
            </div>
        </TodoContext.Provider >
    );
}