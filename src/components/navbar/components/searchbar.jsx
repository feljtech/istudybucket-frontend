import { React, useState } from 'react'

import { SearchIcon, BookOpenIcon } from '@heroicons/react/solid'

const Searchbar = ({ ...props }) => {
	const [input, setInput] = useState('')

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
		<div
			className="focus:border-green-400 rounded w-full py-2 px-5 inline-flex md:justify-betweeen lg:justify-betweeen items-center focus-within:shadow-lg "
			{...props}
		>
			<label htmlFor="task search" role="search">
				<input
					className="rounded border-1 focus:border-green-900 text-gray-500 border-gray-200 mr-5"
					placeholder="Search"
					type="text"
					value={input}
					onChange={handleInput}
					id="task search"
					onKeyDown={handleEnterSubmit}
				/>
			</label>
			<SearchIcon
				className="text-gray-400 w-6 cursor-pointer hover:text-green-500"
				type="submit"
				onClick={handleSubmit}
			/>
		
		</div>
	)
}
export default Searchbar
