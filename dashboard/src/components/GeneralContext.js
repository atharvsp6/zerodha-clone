import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (stock, mode) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [selectedOrderMode, setSelectedOrderMode] = useState("BUY");

  const handleOpenBuyWindow = (stock, mode = "BUY") => {
    setIsBuyWindowOpen(true);
    setSelectedStock(stock);
    setSelectedOrderMode(mode);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStock(null);
    setSelectedOrderMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow stock={selectedStock} mode={selectedOrderMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;