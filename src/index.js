
import './index.css'
import dom from 'react-dom/client'
import App from './App/App.jsx'
//import User from './components/user/User.jsx'
import Modal from './components/Modal/Modal'
//import PaymentModal from './components/payment_modal/Payment_modal.jsx'

const root = dom.createRoot(document.getElementById('root'))
const url1 = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
const url2 = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989'

function sendData(url, body){

    fetch(url, {method: 'post', body})
    .then(rsp => rsp.json())
    .then(console.log)
}

async function getData(url) {

    let promise = await fetch(url1, {})
    .then(rsp => rsp.json())

    return promise
}

let userTest = {
    id: 0,
    name: 'Ricardo',
    username: 'ric09',
    img: 'https://randomuser.me/api/portraits/women/50.jpg'
    
}

/*let userList = [
    < User user={userTest}/>, 
    //<PaymentModal username='Fabiano Morais'/>, 
    < User user={userTest}/>, 
    < User user={userTest}/>, 
]*/

root.render
(<App>
    <Modal 
    titleMsg='Pagamento para o usuário' 
    titleMore={<span className='hightlight'>Eduardo Toupera</span>}>
        Testando
    </Modal>
</App>
)