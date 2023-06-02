import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalForm.css";

const ModalForm = (props) => {
  const showData = props.showdata;
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
            <div>
              <label htmlFor="showName" className="input-label">
                Name:
              </label>
              <input
                id="showName"
                className="input"
                type="text"
                defaultValue={showData.name}
                readOnly
              />
            </div>
            <div>
            <label htmlFor="endedDate" className="input-label">
                Ended Date:
              </label>
            <input
              id="endedDate"
              className="input"
              type="text"
              defaultValue={showData.ended}
                readOnly
            />
            </div>
            <div>
            <label htmlFor="language" className="input-label">
                Language:
              </label>
            <input
              id="language"
              className="input"
              type="text"
              defaultValue={showData.language}
                readOnly
            />
            </div>
          </div>
          {/* user info start from here */}
          <div className="input-container ic1 ">
            <div>
              <label htmlFor="name" className="input-label">
                Your Name:
              </label>
              <input
                id="name"
                className="input"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div>
            <label htmlFor="email" className="input-label">
                Email:
              </label>
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Email"
            />
            </div>
            <div>
            <label htmlFor="address" className="input-label">
                Address:
              </label>
            <input
              id="address"
              className="input"
              type="text"
              placeholder="Current address"
            />
            </div>
          </div>
          <div className="comment-container">
          <label htmlFor="address" className="input-label">
                Comment:
              </label>
            <textarea name="comment" id="" cols="30" rows="10" className="comment-field" placeholder="Write your comment..."></textarea>
          </div>
          <div className="modal-action">
            <Button className="modal-btn-cancel" onClick={props.onHide}>
              Cancel
            </Button>
            <Button className="modal-btn-confirm" onClick={props.onHide}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
