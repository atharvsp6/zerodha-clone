function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container my-5 pt-5">
            <div className="row d-flex align-items-center  justify-content-end">
                <div className="col-8" >
                    <img src={imageURL} alt="img" className="ps-5 img-fluid w-75" />
                </div>

        
                <div className="col-4 fs-5 lh-lg" >
                    <h2>{productName}</h2>
                    <p >{productDescription}</p>
                
                    <div className="mb-2">
                        <a href={tryDemo} className="me-5 text-decoration-none">try demo <i class="fa-solid fa-arrow-right-long"></i> </a>
                        <a href={learnMore} className="me-5 text-decoration-none  ps-2" >Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div>
                        <a href={googlePlay}> <img src="media/images/googlePlayBadge.svg" alt="google-play"></img></a>
                        <a href={appStore} className="ps-4"> <img src="media/images/appstoreBadge.svg" alt="appstore"></img></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LeftSection;