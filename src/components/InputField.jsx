import React, { useState } from "react";
import ShortenLink from "./ShortenLink";
import QRcode from "./QRcode";

const InputField = () => {
  const [shortLinkModal, setShortLinkModal] = useState(false);
  const [QRcodeModal, setQRcodeModal] = useState(false);

  return (
    <React.Fragment>
      <div className="main">
        <header>
          <h1 className="title">
            ShortLink <span>URL Shortener</span>
          </h1>
          <p className="tagline">
            Easily transform long URLs into shorter links or QR codes
          </p>
          <input
            type="text"
            name="input-link"
            id="input-link"
            placeholder="Enter/Paste link here"
          />
        </header>

        <div className="button-container">
          <button
            onClick={() => setShortLinkModal(true)}
            className="shorten-btn"
          >
            Shorten Link
          </button>
          <button onClick={() => setQRcodeModal(true)} className="qrcode-btn">
            Get QR Code
          </button>
        </div>
        <span>
          {shortLinkModal && <ShortenLink close={setShortLinkModal} />}
        </span>
        <span>{QRcodeModal && <QRcode close={setQRcodeModal} />}</span>
      </div>
    </React.Fragment>
  );
};

export default InputField;
