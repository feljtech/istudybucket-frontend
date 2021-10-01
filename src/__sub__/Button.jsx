import React from 'react'

const Button = ({ name, type,...props}) => {
    return (
        <button type={type} className="rounded bg-green-500 hover:bg-green-600 text-white px-3 py-2 font-semibold mt-2" {...props}>
            {name}
        </button>
    )
}

export default Button