import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <ul className="menu">
            <li className="menu__item"><Link to="/">Home</Link></li>
            <li className="menu__item"><Link to="/about">About</Link></li>
            <li className="menu__item"><Link to="/contact">Contact</Link></li>
        </ul>
    );
}