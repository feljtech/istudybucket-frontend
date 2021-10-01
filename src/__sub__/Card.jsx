import React from 'react'

const Card = ({children, ...props}) => {
    return (
        <div className="border shadow-sm bg-gray-50 p-5 rounded" {...props}>
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