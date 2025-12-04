function Brokerage() {
    return ( 
         <div className="container border-top ">
            <div className="row  ">
                <div className="col-8 text-center p-5">
                  <a href="/" className="text-decoration-none"><h3 className="fw-normal ">Brokerage calculator</h3></a>
                  <ul style={{"textAlign":"left","lineHeight":"1.8"}} className="text-muted">
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
                  </ul>
                </div>
                <div className="col-4 text-center p-5">
                  <a href="/" className="text-decoration-none"><h3 className="fw-normal ">List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;