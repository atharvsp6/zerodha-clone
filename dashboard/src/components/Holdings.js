import React, { useState, useEffect } from "react";
import axios from 'axios';
import Chart from 'chart.js/auto'
import { VerticalGraph } from "./VerticalGraph";


// import { holdings } from "../data/data"; //removed dummy data and fetching from the DB

const Holdings = () => {

  const [holdings, setAllholdings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allHoldings").then((res) => {
      console.log(res.data);
      setAllholdings(res.data)
    }).catch((e) => console.log(e));
  }, []);


  const labels = holdings.map((holding) => holding.name);
  console.log(labels);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: holdings.map((holding) => holding.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  const { totalInvestment, currentValue, totalPL } = holdings.reduce(
    (acc, stock) => {
      const currVal = stock.price * stock.qty;
      const investment = stock.avg * stock.qty;
      acc.totalInvestment += investment;
      acc.currentValue += currVal;
      acc.totalPL += currVal - investment;
      return acc;
    },
    { totalInvestment: 0, currentValue: 0, totalPL: 0 }
  );

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row ">
        <div className="col">
          <h5>
            {totalInvestment.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col ">
          <h5 className={totalPL >= 0 ? "profit" : "loss"}>
            {totalPL.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            ({((totalPL / totalInvestment) * 100).toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;
