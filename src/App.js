import './index.css'
import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
	return (
		<div className='App'>
			<TodoForm />
			<TodoList />
		</div>
	)
}

export default App
