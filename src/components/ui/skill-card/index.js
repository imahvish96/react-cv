import React from 'react';
import './style.css';

import Js from '../../../assets/svg/skills/javascript.svg';
import { FaJsSquare } from 'react-icons/fa';

export default function SkillCard({icon, value}) {
    const Icons = icon;
  return (
    <div className='flip-card'>
      <div className='skill-card-wrapper'>
          <div className='skill-front'>
              <Icons size="4rem"/>
          </div>
          <div className='skill-back'>
              {value}
          </div>
      </div>
    </div>
  )
}
