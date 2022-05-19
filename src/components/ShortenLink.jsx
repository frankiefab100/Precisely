import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";

const ShortenLink = ({ close }) => {
  const [shortenURL, setShortenURL] = useState("shrt.link/cwh");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    });

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="close-btn">
          <button onClick={() => close(false)} className="close">
            X
          </button>
        </div>

        <div className="result">
          <p>{shortenURL} </p>
          <CopyToClipboard text={shortenURL} onCopy={() => setCopied(true)}>
            <span className={copied ? "copied" : null}>
              <FaRegCopy />
            </span>
          </CopyToClipboard>
        </div>
        <button className="modal-cta" onClick={() => close(false)}>
          Done
        </button>
      </div>
    </div>
  );
};

export default ShortenLink;
