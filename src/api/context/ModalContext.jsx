import React from 'react'

export const ModalContext = React.createContext({})

export const ModalContextProvider = ({ children }) => {

	const [modalData, setModalData] = React.useState({
		modalShow: false,
		modalType: '',
		modalData: {
			title: 'View Deadline',
		},
	})

	return (
		<ModalContext.Provider value={{ modalData, setModalData }}>
			{children}
		</ModalContext.Provider>
	)
}
