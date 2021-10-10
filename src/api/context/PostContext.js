import React, { useState } from 'react'

export const PostContext = React.createContext({})

// edit description below
// a post context will be made of {
//  username, postTitle, reactions, 
//}

export const PostContextProvider = ({ children }) => {
	const [postData, setPostData] = useState({
        title: 'post title'
	})

	return (
		<PostContext.Provider value={{ postData, setPostData }}>
			{children}
		</PostContext.Provider>
	)
}
