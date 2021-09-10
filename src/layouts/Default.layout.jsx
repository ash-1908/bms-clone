import React from 'react'

const DefaultLayout = (props) => {
    return (
        <div>
            <h1 className="text-xl text-blue-400">Hello default layout</h1>
            {props.children}
        </div>
    )
}

export default DefaultLayout