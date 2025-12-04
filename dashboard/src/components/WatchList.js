import React, { useState, useContext } from "react";
import { Tooltip} from '@mui/material';
import { watchlist } from "../data/data";
import { BarChart, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import GeneralContext from "./GeneralContext";
import DoughnutChart from "./DoughnutChart";

//WatchList Component
const WatchList = () => {


const data = {
  labels:  watchlist.map((watchlist) =>  watchlist.name),
  datasets: [
    {
      label: 'Stock Price',
      data: watchlist.map((watchlist => watchlist.price)),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem stock={stock} key={index} />
          );
        })}
      </ul>
     
      <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;

//WatchListItem component
// Note: React's special `key` prop is not passed to components. Use an explicit prop like `uid` instead.
const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  }


  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down p-3 " />
          ) : (
            <KeyboardArrowUp className="up p-3" />
          )}
          <span className="price">{stock.price}</span>

          {showWatchListActions && <WatchListActions stock={stock} />}
        </div>
      </div>
    </li>
  )
}


//WatchListActions Component

const WatchListActions = ({ stock }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(stock, "BUY");
  };

  const handleSellClick = () => {
    generalContext.openBuyWindow(stock, "SELL");
  };

  return (
    <span >
      <span style={{display:"flex",alignItems:"flex-center",gap:"2px"}}>
        <Tooltip title="Buy(B)" placement="top" arrow>
          <button className="buy" onClick={handleBuyClick}>Buy</button>

        </Tooltip>
        <Tooltip title="Sell(S)" placement="top" arrow >
          <button className="sell " onClick={handleSellClick}>Sell</button>

        </Tooltip>

        <Tooltip title="Analytics(A)" placement="top" arrow >
          <button >
             <BarChart/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}