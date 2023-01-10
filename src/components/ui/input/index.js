
import React from 'react';
import './style.css';

export default function Input({ half, label, type }) {
    return (
        <div className={`item ${half && 'half'}`}>
            <div className="inpupt_wrappr">
                <div className="material-textfield">
                    <input placeholder=" " type={type} />
                    <label>{label}</label>
                </div>
            </div>
        </div>

    )
}
