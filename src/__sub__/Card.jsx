import React from 'react'

const Card = ({children, ...props}) => {
    return (
        <div className="border rounded-md px-3 py-2 mx-1 my-3 cursor-pointer hover:bg-blue-50" {...props}>
            {children}
        </div>
    )
}

export const CardItem = ({...props}) => {
    return (
        <div className="p-5" {...props}>

        </div>
    )
}

export default Card