import './Modal.css'
import { useRef } from 'react';

const Modal = ({titleMsg, titleMore, children}) => {

    const modal = useRef(null)

    function close(){ modal.current.style.display = 'none' }
    function open(){ modal.current.style.display = 'flex' }

    return (
        <div className='modal' ref={modal}>

            <div className='modal-title'>
                <div className='title-msg'>{titleMsg} {titleMore}</div>
                <div className="close-btn" onClick={e => close()}>x</div>
            </div>

            <div className='modal-content'>
                <input type="text" name="" id="" placeholder='Exemplo'/>
                <input type="text" name="" id="" placeholder='Exemplo'/>
                <input type="text" name="" id="" placeholder='Exemplo'/>
                <input type="text" name="" id="" placeholder='Exemplo'/>
                <input type="text" name="" id="" placeholder='Exemplo'/>
            </div>

        </div>
    )

} 

export default Modal