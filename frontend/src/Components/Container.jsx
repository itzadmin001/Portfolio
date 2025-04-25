import React from 'react'

function Container(props) {
    return (
        <div className={`max-w-screen-xl mx-auto ${props.classes}`}>
            {props.children}

        </div>
    )
}

export default Container
