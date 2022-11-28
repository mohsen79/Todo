import React, { useState, useContext } from "react";
import TodoContext from "../Contexts/TodoContext";
import TodoAxios from "../Axios/TodoAxios";

function InputSection() {
    const [text, setText] = useState('');
    const todoContext = useContext(TodoContext);

    let addTodo = (e) => {
        e.preventDefault();
        if (e.target.querySelector('input').value === '') {
            alert('write somthing!');
        } else {
            todoContext.dispatch({ type: 'loading', payload: { loading: true } });
            setText('');
            TodoAxios.post('todos.json', { done: false, text })
                .then(res => {
                    todoContext.dispatch({ type: 'addTodo', payload: { text } });
                    todoContext.dispatch({ type: 'loading', payload: { loading: false } });
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <section className="jumbotron bg-warning m-5 p-3">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Welcome!</h1>
                <p className="lead text-muted">To get started, add some items to your list:</p>
                {todoContext.state.auth ?
                    <form onSubmit={addTodo}>
                        <div className="form-inline">
                            <div className="form-group d-flex m-3">
                                <input type="text" className="form-control mx-sm-3"
                                    placeholder="i want to do ..." value={text}
                                    onChange={(e) => setText(e.target.value)} />
                                <button className="btn btn-primary">add</button>
                            </div>
                        </div>
                    </form>
                    : <h2 className="text-primary">Log in First!</h2>}
            </div>
        </section>
    );
}

export default InputSection;