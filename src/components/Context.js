import React, { useState, useEffect, useReducer } from 'react'
import Reduser from './Reducer'

export const TodoContext = React.createContext({
	data: [],
	dispatch: () => {},
	errorHandler: () => {},
	addTask: () => {},
	error: false,
})

const TodoContextProvider = (props) => {
	const [error, setError] = useState(false)
	const [state, dispatch] = useReducer(
		Reduser,
		JSON.parse(localStorage.getItem('todos')),
	)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state))
	}, [state])

	const errorHandler = () => {
		setError(false)
	}
	const addTask = (userInput) => {
		if (userInput) {
			dispatch({
				type: 'ADD',
				payload: userInput,
			})
		} else {
			setError(true)
		}
	}
	return (
		<TodoContext.Provider
			value={{
				data: state,
				dispatch: dispatch,
				errorHandler: errorHandler,
				addTask: addTask,
				error: error,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	)
}

export default TodoContextProvider
