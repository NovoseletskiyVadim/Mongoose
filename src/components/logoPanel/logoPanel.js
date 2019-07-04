import React from 'react';
import './logoPanel.scss';
import  logo from './img/mongoose.png'

const LogoPanel=()=>{

    return(

        <div className='row logoPanel'>
            <div className='cols col-2'>
                <img src={logo} alt='logo'/>
            </div>  
            <div className='cols col-6'>
                <h1>Ріккі-Тіккі-Таві</h1>
                <p>дитячий клуб</p>
            </div>
            <div className='cols col-4'>
                <i className="fab fa-facebook-f fa-4x"></i>   
                <i className="fab fa-instagram fa-4x"></i>
            </div>
        </div>

    );

};


export default LogoPanel;