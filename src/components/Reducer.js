const Reduser = (state, action)=> {
    switch (action.type){
        case 'ADD':
            return [
                ...state,
                {
					id: Math.random().toString(),
					task: action.payload,
					complete: false,
				}
            ]
            case 'TOOGLE':
                return state.map((el) =>
                		el.id === action.payload ? { ...el, complete: !el.complete } : { ...el },
                )
                case 'REMOVE':
                    return state.filter((todo) => todo.id !== action.payload)
        default:
            return state
    }

}
export default Reduser;