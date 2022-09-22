import React, { useState } from "react";
import Modal from "../Modal/Modal";
import("./DisplayGun.css");
const DisplayGun = (props) => {
  const [modalData, setModalData] = useState({});
  const { gun, increaseCount } = props;
  console.log(gun);
  const { name, bullet, action, img, price, category } = gun;
  return (
    <div>
      <div className="card w-85 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">
              <p>{category}</p>
            </div>
          </h2>
          <p>{action}</p>
          <div className="card-actions">
            <div>Bullet: {bullet}</div>
            <div className="badge badge-outline">Price: {price}</div>
          </div>
          <div className="my-3">
            <button
              onClick={() => increaseCount()}
              className="btn bg-blue-700 border-0 btn-sm mr-4"
            >
              Add To Product
            </button>
            {/* <button className="btn btn-success btn-sm">Detail</button> */}
            <label
              onClick={() => {
                setModalData(gun);
              }}
              htmlFor="my-modal-3"
              className="detailbutton btn btn-success btn-sm"
            >
              Details
            </label>
          </div>
          {modalData && (
            <Modal modal={modalData} setModalData={setModalData}></Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayGun;
