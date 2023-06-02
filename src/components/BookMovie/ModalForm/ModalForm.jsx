import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './ModalForm.css'

const ModalForm = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modal-form">
      <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's booking this movie!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder="Name" />
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
      </div>
      <div className="modal-action">
       <Button className="modal-btn-cancel" onClick={props.onHide}>Cancel</Button>
       <Button className="modal-btn-confirm" onClick={props.onHide}>Confirm</Button>
      </div>
    </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
