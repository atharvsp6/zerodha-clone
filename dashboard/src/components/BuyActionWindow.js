import React, { useState, useContext, useEffect } from "react";

import GeneralContext from "./GeneralContext";
import { useAuth } from "./AuthContext";
import api from "../api/auth";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ stock, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock?.price ?? 0);
  const generalContext = useContext(GeneralContext);
  const { user } = useAuth();

  useEffect(() => {
    setStockQuantity(1);
    setStockPrice(stock?.price ?? 0);
  }, [stock, mode]);

  const handleBuyClick = async () => {
    try {
      const payload = {
        name: stock?.name,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode,
      };

      if (!payload.name) {
        throw new Error("Missing stock name");
      }

      if (!payload.qty || payload.qty <= 0) {
        throw new Error("Quantity must be greater than zero");
      }

      if (!payload.price || payload.price <= 0) {
        throw new Error("Price must be greater than zero");
      }

      if (!user) {
        throw new Error("You must be logged in to place an order.");
      }

      await api.post("/newOrder", payload);
      // Optionally: show toast / success state
      generalContext.closeBuyWindow();
    } catch (err) {
      console.error("Failed to place order", err);
      window.alert(err?.response?.data?.message || err.message || "Failed to place order");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button type="button" className="btn btn-blue" onClick={handleBuyClick}>
            {mode === "SELL" ? "Sell" : "Buy"}
          </button>
          <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;