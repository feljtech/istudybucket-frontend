import React from 'react'

const LSideBar = ({...props}) => {
    return (
        <div className="border fixed left-0 flex flex-col px-5 h-full w-1/4" {...props}>
            <p className="my-3">left</p>
            <p className="my-3">left</p>
            <p className="my-3">left</p>
            <p className="my-3">left</p>
            <p className="my-3">left</p>
            <p className="my-3">left</p>
        </div>
    )
}

export default LSideBar;
