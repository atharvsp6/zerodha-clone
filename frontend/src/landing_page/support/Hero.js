function Hero() {
    return ( 
        <section className="container-fuild" id="supportHero">
            <div className="p-5 mt-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="/">Track tickets</a>
            </div>

             <div className="row ps-5 supportFeatured">
                <div className="col-6 p-3 mb-5">
                    <h1 className="fs-3 p-2 m-2">Search for an answer or browse help topics to create a ticket</h1>
                    <input className="p-3 m-2" type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected.." /> <br/>
                    <a href="/" className="m-2">Track account opening</a>
                    <a href="/" className="m-2">Track segment activation</a>
                    <a href="/" className="m-2">Intraday</a>
                    <a href="/" className="m-2">margins</a>
                    <a href="/" className="m-2">Kite user manual</a>
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-3">
                    <h1 className="fs-3 p-2 ">Featured</h1>
                    <a href="/" >1. Current Takeovers and Delisting - January 2024</a> <br />
                    <a href="/" >2. Latest Intraday leverages - MIS & CO</a>
                </div>
            </div>
        </section>
     );
}

export default Hero;