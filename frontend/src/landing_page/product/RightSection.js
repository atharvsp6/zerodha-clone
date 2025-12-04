function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container my-5 pt-5">
            <div className="row d-flex align-items-center gx-5">
              
                <div className="col-12 col-md-5 fs-5 lh-lg ps-md-3" >
                    <h2>{productName}</h2>
                    <p >{productDescription}</p>

                    <div className="mb-2">
                        <a href={learnMore} className="me-5 text-decoration-none " >Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                </div>

                <div className="col-12 col-md-6 offset-md-1"  >
                    <img src={imageURL} alt="img" className="img-fluid" />
                </div>

            </div>
        </div>
    );
}

export default RightSection;