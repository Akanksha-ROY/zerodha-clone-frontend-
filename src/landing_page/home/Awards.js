import React from 'react';

function Awards () {
    return ( 
        <div className='container p-5 mb-5 '>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1> Largest stock broker in india</h1>
                    <p className='mb-5'>'2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
               
               <div className='row'>
                <div className='col-6'>
                    <ul>
                <li>
                    <p> Futures and options</p>
                </li> 
                <li><p> Commodity derivatives</p></li>
                    
                <li>
                    <p> Currency derivatives</p>
                </li>
               </ul>
                </div>
                     <div className='col-6'>
                        <ul>
                <li>
                    <p> Stock and ipos</p>
                </li><li><p> Direct mutual fund</p></li>
                
                <li>
                    <p> Bonds and govt</p>
                </li>
               </ul>
                     </div>
                  
                </div>
                <img src='media/presslogos.png' style= {{width:"90%"}}/>'
                </div>
            </div>
        </div>
     );
} 

export default  Awards;