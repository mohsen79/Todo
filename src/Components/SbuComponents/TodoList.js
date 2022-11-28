import React, { useContext, useState } from "react";
import Badge from 'react-bootstrap/Badge';
import TodoContext from "../Contexts/TodoContext";
import Todos from './Todos';

function TodoList() {
    const [status, setStatus] = useState(false);
    const todoContext = useContext(TodoContext);
    let { todos } = todoContext.state;
    let filteredTodos = status ? todos.filter(todo => todo.done === true)
        : todos.filter(todo => todo.done === false);

    return (
        <div className="todosList">
            <div className="container">
                <div className="d-flex flex-column align-items-center ">
                    <nav className="col-6 mb-3">
                        <div className="nav nav-tabs" id="nav-tab" href="#home" role="tablist">
                            <a className={`nav-item nav-link font-weight-bold ${!status ? 'active' : ''}`} href="#home" id="nav-home-tab" onClick={() => setStatus(false)}>undone <Badge bg="dark">{todos.filter(todo => todo.done === false).length}</Badge></a>
                            <a className={`nav-item nav-link font-weight-bold ${status ? 'active' : ''}`} href="#home" id="nav-profile-tab" onClick={() => setStatus(true)}>done <Badge bg="dark">{todos.filter(todo => todo.done === true).length}</Badge></a>
                        </div>
                    </nav>
                    {todoContext.state.auth ?
                        filteredTodos.map((todo, index) => <Todos key={index} todo={todo} />)
                        : <h2 className="text-primary">Log in First!</h2>}
                </div>

            </div>
        </div>
    );
}

export default TodoList;