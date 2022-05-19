import React from "react";

const QRcode = ({ close }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="close-btn">
          <button onClick={() => close(false)} className="close">
            X
          </button>
        </div>
        <div>QR CODE</div>
        <button className="modal-cta">Download</button>
      </div>
    </div>
  );
};

export default QRcode;
