import { useState } from 'react'

const TodoForm = ({ addTask }) => {
	const [userInput, setUserInput] = useState('')

	const submitChangeHadler = (e) => {
		e.preventDefault()
		addTask(userInput)
        setUserInput('')
	}
	const inputChangeHandler = (e) => {
		setUserInput(e.currentTarget.value)
	}
	const keyPressHandler = (e) => {
        if(e.key === 'Enter'){
            submitChangeHadler(e)
        }
    }

	return (
		<form onSubmit={submitChangeHadler}>
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
// состояние инпута
export default TodoForm
