
function Hero() {
    return (
        <div className="container ">
            <div className="row p-5 my-5 text-center">
                <h2 className="fw-semi-bold">Charges</h2>
                <p className="text-muted mt-2 fs-4">List of all charges and taxes</p>
              
            </div>
            <div className="row my-5">
                <div className="col-4 text-center p-5">
                    <img src="media/images/pricing-latest.svg" alt="pricing-img" />
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 text-center p-5">
                    <img src="media/images/pricing_latest_files/other-trades.svg"  alt="pricing-img" />
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 text-center p-5">
                    <img src="media/images/pricing-latest.svg" alt="pricing-img" />
                    <h2>Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;