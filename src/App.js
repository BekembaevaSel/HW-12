import './index.css'
import React, { useEffect, useState } from 'react'
// import { useReducer } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Reduser from './components/Reducer'
import { useReducer } from 'react/cjs/react.development'
import ErrorModal from './components/ErrorModal'

function App(props) {
	const [error, setError] = useState(null)
	const [state, dispatch] = useReducer(
		Reduser,
		JSON.parse(localStorage.getItem('todos')),
	)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state))
	}, [state])

	const addTask = (userInput) => {
		if (userInput) {
			dispatch({
				type: 'ADD',
				payload: userInput,
			})
		} else {
			setError({
				title: 'Nothing to Add',
				message:
					'Please Fill the Input Field to add to Your TO-DO List',
			})
		}
	}

	const errorHandler = () => {
		setError(null)
	}

	return (
		<div className='App'>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<header>
				<h1>My To-Do List: {state.length}</h1>
			</header>
			<TodoForm addTask={addTask} />
			{state.map((el) => {
				return <Todo key={el.id} todo={el} dispatch={dispatch} />
			})}
		</div>
	)
}

// state стал массивом туду

export default App
