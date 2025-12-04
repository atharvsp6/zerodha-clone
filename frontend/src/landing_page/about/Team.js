function Team() {
    return (
        <div className="container p-0 m-0 ">
            <div className="row  my-5">
                <h1 className="fs-3 text-center">People</h1>
            </div>
            <div className="row pl-5 my-5">
                <div className="col-6 text-muted text-center mb-5 pb-5" >
                    <img style={{borderRadius:"100%",width:"60%",marginLeft:"2rem",marginBottom:"2rem"}} src="media/images/nithinKamath.jpg" alt="nithinkamath"/>
                    <h5 className="fs-5 py-3">Nithin Kamath</h5>
                    <p className="fs-5">Founder, CEO</p>
                </div>
                
                   
                <p className="col-6 fs-5">
                   <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br/> hurdles he faced during his decade long stint as a trader. Today, <br/> Zerodha has changed the landscape of the Indian broking industry.</p> 

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </p>
            </div>
        </div>
      );
}

export default Team;