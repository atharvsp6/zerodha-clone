import React from 'react';
function Hero() {
    return ( 
        <div className="container p-5">
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='hero img' className='mb-5 w-75 mx-auto'/>
                <h1 className='mt-3 mb-2'>Invest in everything</h1>
                <p className='mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-3 border-none fs-4 border-0 rounded-1 fs-4'  style={{width:"20%",margin:"auto",padding:"0.75rem",backgroundColor:"#387ed1",color:"white"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;