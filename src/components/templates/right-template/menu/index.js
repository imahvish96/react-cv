import React from 'react'

export default function Menu({ onOpen }) {
    return (
        <a className="menu_trigger" onClick={onOpen}>
            <span className="text">Menu</span>
            <span className="hamb">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </a>
    )
}
