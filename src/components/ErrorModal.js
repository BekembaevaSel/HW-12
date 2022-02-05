import './ErrorModal.css'

const ErrorModal = (props) => {
    return (
        <div>
            <div onClick={props.onConfirm} className="backdrop">
                <div className="modal">
                    <header className="header">
                        <h2>{props.title}</h2>
                    </header>
                    <div className="content">
                        <p>{props.message}</p>
                    </div>
                    <footer className="actions">
                        <button onClick={props.onConfirm}>OK</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal;