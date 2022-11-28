import React, { useState, useContext, useMemo, useEffect } from "react";
import TodoContext from "../Contexts/TodoContext";
import TodoAxios from "../Axios/TodoAxios";
import { Link } from "react-router-dom";

function TodoList(props) {
    let { id, text, done } = props.todo;

    const [newEdit, setNewEdit] = useState(text);
    const [edit, setEdit] = useState(false);
    const todoContext = useContext(TodoContext);

    let todoStatus = () => {
        todoContext.dispatch({ type: 'loading', payload: { loading: true } });
        TodoAxios.put(`todos/${id}.json`, { done: !done, text })
            .then(res => {
                todoContext.dispatch({ type: 'todoStatus', payload: { id } });
                todoContext.dispatch({ type: 'loading', payload: { loading: false } });
            })
            .catch(err => console.log(err));
    };

    let editTodo = (e) => {
        e.preventDefault();
        if (e.target.querySelector('input').value === '') {
            alert('write somthing!');
            setEdit(false);
        } else {
            if (text == newEdit) { } else {
                todoContext.dispatch({ type: 'loading', payload: { loading: true } });
                TodoAxios.put(`todos/${id}.json`, { done, text: newEdit })
                    .then(res => {
                        todoContext.dispatch({ type: 'editTodo', payload: { id, text: newEdit } });
                        todoContext.dispatch({ type: 'loading', payload: { loading: false } });
                    })
                    .catch(err => console.log(err));
            }
            setTimeout(() => {
                setEdit(false);
            }, 100);
        }
    };

    let deleteTodo = () => {
        todoContext.dispatch({ type: 'loading', payload: { loading: true } });
        TodoAxios.delete(`todos/${id}.json`)
            .then(res => {
                todoContext.dispatch({ type: 'deleteTodo', payload: { id } });
                todoContext.dispatch({ type: 'loading', payload: { loading: false } });
            })
            .catch(err => console.log(err));
    };

    // useMemo(() => editTodo, [newEdit]);

    return (
        <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                {edit ?
                    <form onSubmit={editTodo} className="d-flex justify-content-between align-items-center border rounded p-3 w-100">
                        <input type="text" className="form-control" defaultValue={text} onChange={(e) => setNewEdit(e.target.value)} />
                        <button className="btn btn-info ms-3">edit</button>
                        <button className="btn btn-danger ms-3" onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setEdit(false)
                        }
                        }>cancel</button>
                    </form>
                    :
                    <>
                        <div>
                            <Link className="text-decoration-none" to={`todos/${id}`}
                                state={props.todo}>{text}</Link>
                        </div>
                        <div>
                            <button type="button" className="btn btn-warning btn-sm" onClick={todoStatus}>
                                {done ? 'undo' : 'completed'}
                            </button>
                            <button type="button" className="btn btn-info btn-sm ms-1" onClick={() => setEdit(true)}>edit</button>
                            <button type="button" className="btn btn-danger btn-sm ms-1" onClick={deleteTodo}>delete</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default TodoList;