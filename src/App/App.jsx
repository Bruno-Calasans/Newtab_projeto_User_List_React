import UsersList from '../components/UserList/UsersList.jsx'
import PaymentModal from '../components/Payment_modal/PaymentModal.jsx'
import SuccessModal from '../components/Success_modal/SuccessModal.jsx'
import FailModal from '../components/Fail_modal/FailModal.jsx'
import Highlight from '../components/Highlight/Highlight.jsx'
import { useState } from 'react';

const userURL = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
const paymentURL = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989'

function moneyFormat(string, cifra='R$') {

    const valor = string
      .replace(/\D/g, '')
      .replace(/^0*/, '')
      .padStart(3, '0')
      
    let p1 = valor.slice(0, -2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    let p2 = valor.slice(-2)

    return  `${cifra} ${p1},${p2}`
}

function numericFormat(string) {
    return Number(string.replace(/[^\d,]+/gi, '').replace(/,/gi, '.'))
}

export default function App(){

    // relacionado com os usuários
    let [user, setUser] = useState({}) // usuário atual

    // relacionados com os modais
    let [openedPaymentModal, setPaymentModal] = useState(false)
    let [openedSuccessModal, setSuccessModal] = useState(false)
    let [openedFailModal, setFailModal] = useState(false)

    // status dos campos e do pagamento em geral
    let [paymentInputStatus, setPaymentInputStatus] = useState(false)

    // alterna o usuário atual
    const toggleUser = (user) => {
        togglePaymentModal()
        setUser(user)
    }

    // alterna o estado dos Modais
    const togglePaymentModal = () => {

        if(openedPaymentModal) { setPaymentModal(false) }
        else { setPaymentModal(true) }
    }

    const toggleSuccesstModal = () => {

        if(openedSuccessModal) { setSuccessModal(false) }
        else { setSuccessModal(true) }
    }

    const toggleFailModal = () => {

        if(openedFailModal) { setFailModal(false) }
        else { setFailModal(true) }
    }

    const paymentInputHandler = (value) => {

        let monetario = moneyFormat(value)
        let numerico = numericFormat(monetario)

        // caso seja nulo, undefined ou zero
        if( !numerico ) { setPaymentInputStatus(false) }
        else{ setPaymentInputStatus(true) }

        return monetario
    }

    // ao clicar no botão de pagar
    const pay = (e)  => {

        // fazendo as verificações dos campos
        if(!paymentInputStatus) {
            return alert('Informe o valor do pagamento.')
        }

        // fazendo um requisição post
        fetch(paymentURL, {method: 'post'})
            .then(resp => resp.json())
            .then(resp => {

                if(resp.success) { setSuccessModal(true) }
                else { setFailModal(true) }

                togglePaymentModal()
                setPaymentInputStatus(false)
            })
    }

    return (

        <div className="app">

            <UsersList url={userURL} clickHandler={toggleUser}/>

            {
                openedPaymentModal &&

                <PaymentModal
                closeHandler={togglePaymentModal}
                inputHandler={paymentInputHandler}
                clickHandler={pay}>

                    Pagamento para <Highlight text={user.name}/>

                </PaymentModal>
            }

            {
                openedSuccessModal &&

                <SuccessModal closeHandler={toggleSuccesstModal}>
                    Pagamento conluído com sucesso.
                </SuccessModal>
            }


            {
                openedFailModal &&

                <FailModal closeHandler={toggleFailModal}>
                    Pagamento falhou.
                </FailModal>
            }

        </div>
    )
}
