import React from 'react';
function Stats() {
    return ( 
        <div className='container mt-5 pr-3 ms-0 ' style={{"marginBottom":"8rem"}} >
            <div className='row ms-3'>
                <div className='col-6 p-3 '>
                    <ul>
                        <h4 className='my-5 fs-3'>Trust with confidence</h4>
                        <li style={{"list-style-type": "none", "padding-left" : "0"}} ><h3>Customer-first always</h3>
                            <p className='mb-5 fs-4 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        </li>
                        <li style={{"list-style-type": "none", "padding-left" : "0"}}><h3>No spam or gimmicks</h3>
                            <p  className='mb-5 fs-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        </li>
                        <li style={{"list-style-type": "none", "padding-left" : "0"}} className='mb-2'><h3>The Zerodha universe</h3>
                            <p  className='mb-5 fs-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </li>
                        <li style={{"list-style-type": "none", "padding-left" : "0"}} className='mb-2 fs-4'><h3>Do better with money</h3>
                            <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </li>

                    </ul>
                </div>
                <div className='col-6 mt-5 text-center p-0 m-0'>
                    <img src='media/images/ecosystem.png' alt='img-ecosystem' style={{"transform":"scale(0.7)","position":"relative","right":"8rem"}} />
                    
                        <a href='/explore' className='mx-5 fs-5 text-decoration-none mb-5'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='/kite' className='fs-5 text-decoration-none mb-5 '>Try Kite demo <i class="fa-solid fa-arrow-right"></i> </a>
                  
                </div>
            </div>
        </div>
     );
}

export default Stats;