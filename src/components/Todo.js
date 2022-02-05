import './Todo.css'
const Todo = ({ todo, dispatch }) => {
	return (
		<div key={todo.id} className='item-todo'>
			<div
				className={todo.complete ? 'item-text strike' : 'item-text'}
				onClick={() =>
					dispatch({
						type: 'TOOGLE',
						payload: todo.id,
					})
				}
			>
				{todo.task}
			</div>
			<div
				onClick={() =>
					dispatch({
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
