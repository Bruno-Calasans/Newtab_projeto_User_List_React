import './Button.css'

export default function Button({clickHandler, children}) {

    return (
        <button
        className='custom-btn' 
        onClick={e =>{ 
            if(clickHandler){ clickHandler(e) } 
        }}>
            {children}
        </button>
    )
}
