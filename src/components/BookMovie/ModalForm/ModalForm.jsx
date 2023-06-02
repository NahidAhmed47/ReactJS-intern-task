import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalForm.css";
import { setUserData } from "../../../utils/localStorage";
import { toast } from "react-hot-toast";

const ModalForm = (props) => {
  const showData = props.showdata;
  //   handle confirm button
  const handleFormData = (e)=>{
      e.preventDefault();
      const form = e.target;
      const user_name = form.name.value;
      const email = form.email.value;
      const address = form.address.value;
      const comment = form.comment.value;
      const ticketInfo = {
        ticketSL: Math.round(Math.random()*10000),
        showId: showData.id,
        user_name,
        email,
        address,
        comment
      }
      setUserData(ticketInfo)
      toast.success('Booking successful!')
      props.onHide();
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modal-form">
      <form className="form" onSubmit={handleFormData}>
          <div className="title">Welcome</div>
          <div className="subtitle">Let's booking and enjoy!</div>
          <div className="input-container ic1">
            <div>
              <label htmlFor="showName" className="input-label">
                Name:
              </label>
              <input
                id="showName"
                className="input"
                type="text"
                name="showName"
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
                name="date"
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
                name="language"
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
                name="name"
                required
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
                name="email"
                required
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
                name="address"
              />
            </div>
          </div>
          <div className="comment-container">
            <label htmlFor="address" className="input-label">
              Comment:
            </label>
            <textarea
              name="comment"
              id=""
              cols="30"
              rows="10"
              className="comment-field"
              placeholder="Write your comment..."
            ></textarea>
          </div>
          <div className="modal-action">
            <Button className="modal-btn-cancel" onClick={props.onHide}>
              Cancel
            </Button>
            <button className="modal-btn-confirm">
              Confirm
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
