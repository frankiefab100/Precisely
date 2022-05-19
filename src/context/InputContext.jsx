import React, { useState, createContext, useContext } from "react";

export const InputValueContext = createContext();

export const InputContextConsumer = () => {
  return useContext(InputValueContext);
};

export const InputContext = ({ children }) => {
  const [shortenURL, setShortenURL] = useState("hahaha");
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <InputContext.Provider
        value={{ shortenURL, copied, setShortenURL, setCopied }}
      >
        {children}
      </InputContext.Provider>
    </div>
  );
};

export default InputContext;
