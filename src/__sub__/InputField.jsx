import React from 'react'

export default Card = ({...props, type}) => {
    const [input, setInput] = React.useState('')

	const handleInput = (e) => {
		setInput(e.target.value)
	}

	const handleEnterSubmit = (e) => {
		if (e.key === 'Enter') {
			handleSubmit(e)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setInput('')
	}
    return (
				<input {...props}
					className="rounded border-1 focus:border-green-900 text-gray-500 border-gray-200 p-2"
					placeholder="Search"
					type={type}
					value={input}
					onChange={handleInput}
					id={props.id}
					onKeyDown={handleEnterSubmit}
				/>
    )
}