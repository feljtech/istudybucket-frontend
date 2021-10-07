import React from 'react'

// change to resizable when text reaches a specific length
const TextArea = ({...props}) => {
    return ( 
        <textarea {...props} className="outline-none block rounded mt-3" name="textfield" id="" cols="50" rows="3">

        </textarea>
    )
}

export default TextArea
