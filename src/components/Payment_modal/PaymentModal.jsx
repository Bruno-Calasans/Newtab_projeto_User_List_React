import Modal from "../Modal/Modal"
import Input from "../Input/Input"
import Select from "../Select/Select"
import Button from "../Button/Button"

export default function PaymentModal({
    children, 
    closeHandler, 
    changeHandler, 
    clickHandler
}) {

    return (
        <Modal titleMsg={children} closeHandler={closeHandler}>

            <Input changeHandler={changeHandler}/>

            <Select>
                {[
                    'Cartão de crédito terminado em 1111',
                    'Cartão de crédito terminado em 1234'
                ]}
            </Select>
    
            <Button clickHandler={clickHandler}>Pagar</Button>
                    
        </Modal>
    )
}