import { useRef } from 'react'
import './Payment_modal.css'

export default function PaymentModal({username}) {

    const modal = useRef()

    return (

        <div className='payment-modal' ref={modal}>
 
            <div className='modal-title'>
                <div>Pagamento para o usuário <span className='hightlight'>{username}</span>
                </div>
                <div className='close-btn'>x</div>
            </div>

            <div className='modal-content'>
                <input type="text" id="" placeholder='R$ 00,00'/>
                <select className='cards-option'>
                    <option value="0">Cartão com final 0123</option>
                    <option value="1">Cartão com final 1111</option>
                </select>
            </div>

            <button className='payment-modal-btn'>Pagar</button>

        </div>
    )
}