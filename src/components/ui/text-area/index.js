
import React from 'react';
import './style.css';

export default function Textarea({ label, type }) {
    return (
        <div className={`item`}>
            <div className="inpupt_wrappr">
                <div className="material-textfield txtareat">
                    <textarea className='coustom_textarea' placeholder=" "/>
                    <label>{label}</label>
                </div>
            </div>
        </div>

    )
}
