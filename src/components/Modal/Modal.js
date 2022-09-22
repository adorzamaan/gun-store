import React from "react";

const Modal = (props) => {
  console.log(props);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => {
              props.setModalData(null);
            }}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <img
              className="w-full"
              src={props.modal.img ? props.modal.img : "No found"}
              alt="img"
            />
            <h3 className="mt-4 text-lg font-bold">
              Name: {props.modal.name ? props.modal.name : "not found"}
            </h3>
            <p className="py-1">
              Action: {props.modal.action ? props.modal.action : "Not found"}
            </p>
            <p className="py-1">
              Bullet: {props.modal.bullet ? props.modal.bullet : "not found"}
            </p>
            <p className="py-1">
              Price: {props.modal.price ? props.modal.price : "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
