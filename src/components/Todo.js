import { useContext } from 'react'
import { TodoContext } from './Context'
import './Todo.css'

const Todo = ({ todo }) => {
	const ctxData = useContext(TodoContext)
	return (
		<div key={todo.id} className='item-todo'>
			<div
				className={todo.complete ? 'item-text strike' : 'item-text'}
				onClick={() =>
					ctxData.dispatch({
						type: 'TOOGLE',
						payload: todo.id,
					})
				}
			>
				{todo.task}
			</div>
			<div
				onClick={() =>
					ctxData.dispatch({
						type: 'REMOVE',
						payload: todo.id,
					})
				}
			>
				<div>
					<img
						className='delete-img'
						src='https://cdn-icons-png.flaticon.com/512/1214/1214926.png'
					/>
				</div>
			</div>
		</div>
	)
}

export default Todo
