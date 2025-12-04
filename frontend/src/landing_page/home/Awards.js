import React from 'react';
function Awards() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src='media/images/largestBroker.svg' alt='largestbroker'></img>
                </div>
                <div className='col-6 p-3 mt-3'>
                    <h1>Largest Stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul className='d-flex flex-column gap-3'>  
                                <li>Futures and options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className='d-flex flex-column gap-3'>
                                <li>Stocks & IPOS</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Goals</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' alt='presslogo' className='w-75 ml-2'></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;