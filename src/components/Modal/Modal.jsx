import './Modal.css'
import { useEffect, useRef, useState } from 'react';

const Modal = ({titleMsg, children, closeHandler}) => {

    let [hidden, setHidden] = useState(false)
    const modal = useRef(null)

    useEffect(() => {

        if(hidden) {
            modal.current.style.display = 'none'

        }else {
            modal.current.style.display = 'flex'
        }

    }, [hidden])

    return (

        <div className='modal' ref={modal}>

            <div className='modal-title'>
                <div className='title-msg'>{titleMsg}</div>
                <div className="close-btn" 
                onClick={e => {

                    // função que será chamada toda vez que fechar o modal
                    if(closeHandler) { closeHandler() }
                    setHidden(true)

                }}>x</div>
            </div>

            <div className='modal-content'>
                {children}
            </div>

        </div>
    )

} 

export default Modal