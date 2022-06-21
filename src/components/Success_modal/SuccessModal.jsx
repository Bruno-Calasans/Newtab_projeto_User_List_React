
import Modal from "../Modal/Modal"

export default function SuccessModal({closeHandler, titleMsg, children}) {

    return (
        <Modal 
        titleMsg={titleMsg ?? 'Recibo de pagamento'}
        closeHandler={closeHandler}>
            <div className="success">{children}</div>
        </Modal>
    )
}