import React from 'react'

// change to resizable when text reaches a specific length
const TextArea = ({...props}) => {
    return ( 
        <textarea {...props} className="green-handle border border-gray-400 outline-none block rounded resize-none" name="textfield" id="" cols="50" rows="5">

        </textarea>
    )
}

export default TextArea
