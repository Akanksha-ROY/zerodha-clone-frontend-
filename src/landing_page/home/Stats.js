import React from 'react';

function Stats() {
    return (
        <div className='container p-5'>
            <div className='row p-5 '>
                <div className='col-6 p-5'>
                    <h1 className='fs-2'> Trust with Confidence</h1>
                    <h2 className='fs-4'>Customer First always</h2>
                    <p className='text-muted'> that's why 1.3 crore customers trust Zerodha with rs3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-4'>No spams or gimmicks</h2>
                    <p  className='text-muted'> that's why 1.3 crore customers trust Zerodha with rs3.5+ lakh crores worth of equity investments.</p>
                    
                    <h2 className='fs-4'>The zerodha universe</h2>
                    <p  className='text-muted'> that's why 1.3 crore customers trust Zerodha with rs3.5+ lakh crores worth of equity investments.</p>
                    
                    <h2 className='fs-4'>Do better with money</h2>
                    <p  className='text-muted'> that's why 1.3 crore customers trust Zerodha with rs3.5+ lakh crores worth of equity investments.</p>
                     </div>
                     <div className='col-6 p-5' >
                        <img src='media/ecosystem.png' style={{width:"90%"}}/>
                   <div className='text-center'>
                    <a href='' className='mx-5  'style={{textDecoration:"none"}}>Explore our products</a>
                    <a href=''style={{textDecoration:"none"}}>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                   </div>
                </div>
            </div>
             </div>
      );
}

export default Stats;