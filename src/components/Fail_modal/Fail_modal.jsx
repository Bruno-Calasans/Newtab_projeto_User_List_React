import Modal from "../Modal/Modal"

export default function FailModal({closeHandler, titleMsg, children}) {

    return (
        <Modal 
        titleMsg={titleMsg ?? 'Recibo de pagamento'}
        closeHandler={closeHandler}>
            <div className="fail">{children}</div>
        </Modal>
    )
}