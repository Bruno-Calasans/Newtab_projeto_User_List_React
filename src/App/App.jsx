
// componentes próprios
import UsersList from '../components/Users_List/UsersList.jsx'
import PaymentModal from '../components/Payment_modal/PaymentModal.jsx'
import SuccessModal from '../components/Success_modal/SuccessModal.jsx'
import FailModal from '../components/Fail_modal/FailModal.jsx'
import Highlight from '../components/Highlight/Highlight.jsx'

// coisas do React
import { useState } from 'react';

// coisas próprias
import { moneyFormat, numericFormat } from '../assets/functions.js'
import {userURL, paymentURL} from '../assets/others.js'

export default function App(){

    // relacionado com os usuários
    let [user, setUser] = useState({}) // usuário atual

    // relacionados com os modais
    let [showPaymentModal, setPaymentModal] = useState(false)
    let [showSuccessModal, setSuccessModal] = useState(false)
    let [showFailModal, setFailModal] = useState(false)

    // status dos campos e do pagamento em geral
    let [paymentInputStatus, setPaymentInputStatus] = useState(false)

    // alterna o usuário atual
    const toggleUser = (user) => {
        togglePaymentModal()
        setUser(user)
    }

    // alterna o estado dos Modais
    const togglePaymentModal = () => { setPaymentModal(!showPaymentModal) }

    const toggleSuccesstModal = () => { setSuccessModal(!showSuccessModal) }

    const toggleFailModal = () => { setFailModal(!showFailModal) }

    const paymentInputHandler = (value) => {

        let monetario = moneyFormat(value)
        let numerico = numericFormat(monetario)

        // caso seja nulo, undefined ou zero
        if( !numerico ) { setPaymentInputStatus(false) }
        else{ setPaymentInputStatus(true) }

        return monetario
    }

    // ao clicar no botão de pagar
    const pay = ()  => {

        // fazendo as verificações dos campos
        if(!paymentInputStatus) {
            return alert('Informe o valor do pagamento.')
        }

        // fazendo um requisição post
        fetch(paymentURL, {method: 'post'})
            .then(resp => resp.json())
            .then(json => {

                if(json.success) { setSuccessModal(true) }
                else { setFailModal(true) }

                togglePaymentModal()
                setPaymentInputStatus(false)
            })
    }

    return (

        <div className="app">

            <UsersList url={userURL} clickHandler={toggleUser}/>

            {
                showPaymentModal &&

                <PaymentModal
                closeHandler={togglePaymentModal}
                changeHandler={paymentInputHandler}
                clickHandler={pay}>

                    Pagamento para <Highlight text={user.name}/>

                </PaymentModal>
            }

            {
                showSuccessModal &&

                <SuccessModal closeHandler={toggleSuccesstModal}>
                    Pagamento conluído com sucesso.
                </SuccessModal>
            }


            {
                showFailModal &&

                <FailModal closeHandler={toggleFailModal}>
                    Pagamento falhou.
                </FailModal>
            }

        </div>
    )
}
