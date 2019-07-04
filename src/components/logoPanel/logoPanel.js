import React from 'react';
import './logoPanel.scss';
import  logo from './img/mongoose.png'

const LogoPanel=()=>{

    return(

        <div className='row logoPanel'>
            <div className='cols col-2'>
                <img src={logo} alt='logo'/>
            </div>  
            <div className='cols col-7'>
                <h1>Ріккі-Тіккі-Таві</h1>
                <p>дитячий клуб</p>
            </div>
            <div className='cols col-1'></div>
            <div className='cols col-1'>
                <i className="fab fa-facebook-f fa-3x"></i>   
            </div>
            <div className='cols col-1'>
                <i className="fab fa-instagram fa-3x"></i>
            </div>
        </div>

    );

};


export default LogoPanel;