import React, { useContext } from 'react'
import { TodoContext } from './Context'
import Todo from './Todo'

const TodoList = () => {
	const ctxData = useContext(TodoContext)
	return (
		<React.Fragment>
			{ctxData.data.map((el) => {
				return <Todo key={el.id} todo={el} />
			})}
		</React.Fragment>
	)
}

export default TodoList
