import { useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { TodoContext } from './Context'
import ErrorModal from './ErrorModal'

const TodoForm = () => {
	const [userInput, setUserInput] = useState('')
	const ctxData = useContext(TodoContext)

	const submitChangeHadler = (e) => {
		e.preventDefault()
		ctxData.addTask(userInput)
		setUserInput('')
	}
	const inputChangeHandler = (e) => {
		setUserInput(e.currentTarget.value)
	}
	const keyPressHandler = (e) => {
		if (e.key === 'Enter') {
			submitChangeHadler(e)
		}
	}
	return (
		<form onSubmit={submitChangeHadler}>
			{ctxData.error &&
				ReactDOM.createPortal(
					<ErrorModal
						title={'Nothing to Add'}
						message={
							'Please Fill the Input Field to add to Your TO-DO List'
						}
						onConfirm={ctxData.errorHandler}
					/>,
					document.getElementById('modal'),
				)}
			<input
				type='text'
				value={userInput}
				onChange={inputChangeHandler}
				onKeyDown={keyPressHandler}
				placeholder='Enter Here...'
			/>
			<button>Save</button>
		</form>
	)
}
export default TodoForm
