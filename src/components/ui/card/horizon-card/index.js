import React from 'react'

export default function HorizonCard({subTitle, start, end, title, berief, points, location}) {
  return (
    <li>
      <div class="item">
        <div class="item_top">
          <h5>{subTitle}</h5>
          <span>{`${start} - ${end}`}</span>
        </div>
        <h3>{title}</h3>
        <p>{berief}</p>
      </div>
    </li>
  )
}
