import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import TodoContext from "../Contexts/TodoContext";
import { NavLink } from "react-router-dom";

function Header() {
    const [auth, setAuth] = useState(false);
    const todoContext = useContext(TodoContext);

    let Auth = () => {
        setAuth(!auth);
        todoContext.dispatch({ type: 'logIn', payload: { auth: !auth } });
    }

    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <div className="d-flex justify-content-between">
                        <a href="#home" className="navbar-brand d-flex align-items-center">
                            <strong>Todo App</strong>
                        </a>
                        <NavLink className="m-3 text-decoration-none" to="/">Home</NavLink>
                        <NavLink className="m-3 text-decoration-none" to="/about-us">About us</NavLink>
                        <NavLink className="m-3 text-decoration-none" to="/contact-us">Contact us</NavLink>
                    </div>
                    <Button className={auth ? 'bg-danger' : 'bg-info'} onClick={Auth}>
                        {auth ? 'Log Out' : 'Log In'}
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;