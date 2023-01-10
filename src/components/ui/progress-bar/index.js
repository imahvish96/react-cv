import React from 'react'

export default function ProgressBar() {
    return (
        <div className="progress_item" data-value="92">
            <div className="item_in">
                <h3 className="progress_title">Adobe Photoshop</h3>
                <span className="progress_percent" style={{right: '8%'}}>30%</span>
                <div className="bg_wrap">
                    <div className="progress_bg" style={{width: '30%'}}></div>
                </div>
            </div>
        </div>
    )
}
