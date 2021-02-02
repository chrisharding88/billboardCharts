import React from 'react'



export const ChartResult = (props) => {
    return (
        <div className="Chart">
            <row>
                <span>{props.artist}</span>
                <span>{props.song}</span>
            </row>
        </div>
    )
}