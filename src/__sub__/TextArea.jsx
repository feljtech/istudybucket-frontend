import React from 'react'

const TextArea = ({...props}) => {
    return (
        <textarea {...props} className="outline-none resize-none block w-full rounded mt-3" name="textfield" id="" cols="30" rows="2">

        </textarea>
    )
}

export default TextArea
