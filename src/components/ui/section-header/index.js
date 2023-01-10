import React from 'react'

export default function SectionHeader({subTitle, title, description}) {
    return (
        <div className="resumo_fn_main_title">
            <h3 className="subtitle">{subTitle}</h3>
            <h3 className="title">{title}</h3>
            <p className="desc">{description}</p>
        </div>
    )
}
