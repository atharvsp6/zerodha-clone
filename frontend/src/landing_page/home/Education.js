import React from 'react';
function Education() {
    return ( 
        <div className='container ms-0 px-0' style={{"marginTop":"7rem"}}>
            <div className='row gx-5 align-items-center'>
                <div className='col-lg-5'>
                    <img src='media/images/education.svg' alt='img'></img>
            </div>
            <div className='col-lg-7 ps-lg-5'>
                   <h2 className='fs-2'>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                     <a href='/varsity' className='fs-5 text-decoration-none'>Varsity <i class="fa-solid fa-arrow-right"></i> </a>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='/trading' className='fs-5 text-decoration-none'>TradingQ&A <i class="fa-solid fa-arrow-right"></i> </a>
            </div>
            </div>
        </div>
     );
}

export default Education;