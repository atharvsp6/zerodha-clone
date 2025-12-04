import React from 'react';
function Pricing() {
    return (
        <div className='container ms-0 px-0'>
            <div className='row ms-5'>
                <div className='col-5'>
                    <h1 className='fs-3'>Unbeatable pricing</h1>
                    <p className='fs-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/kite' className='fs-5 text-decoration-none'>See Pricing <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col'><img src='media/images/pricing-latest.svg' alt='img' style={{"height":"60%"}}></img>
                        </div>
                        <div className='col'><img src='media/images/pricing-latest.svg' alt='img'  style={{"height":"60%"}}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;