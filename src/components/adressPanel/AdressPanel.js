import React from 'react';
import './AdressPanel.scss';

const AdressPanel=()=>{

    return(
        
        <div className='row addressPanel'>
            
            <div className="cols col-4">
                <div className="telephone">
                    <i className="fas fa-phone"></i>
                    <span>+38(068)554-65-84</span>
                    <span>+38(095)578-18-22</span>
                </div>
            </div>

            <div className="cols col-4">
                    <div className="mailTo">
                        <i className="fas fa-envelope fa-lg"></i>
                        <span>rikki_tikki_tavi@gmail.com</span>
                    </div>
            </div>

            <div className="cols col-4">
                <div className="schedule">
                    <i className="far fa-clock fa-lg"></i>
                    <span>ми працюємо: Пн-Пт 9.00-19.00</span>
                </div>
            </div>

        
        </div>

    );


};

export default  AdressPanel;