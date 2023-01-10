import React from 'react';
import './style.css'

export default function Button({ label, type }) {
  return (
    <div className='item'>
        <button id="send_message" type={type}>{label}</button>
    </div>
  )
}
