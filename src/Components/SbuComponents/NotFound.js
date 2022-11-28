import React, { useRef } from "react";

export default function NotFound() {
    const el = useRef();
    window.onmousemove = function (e) {
        let x = e.clientX / 5;
        let y = e.clientY / 5;

        el.current.style.backgroundPositionX = x + 'px';
        el.current.style.backgroundPositionY = y + 'px';
    };

    let body = {
        height: '100vh'
    };
    let container = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${require('./../../404.jpeg')})`,
        opacity: '.8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        textAlign: 'center',
        padding: '3rem'
    }
    return (
        <div style={body}>
            <div style={container} ref={el}>
                <div className="content">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>this page does not exist in repository</p>
                </div>
            </div>
        </div>
    );
}