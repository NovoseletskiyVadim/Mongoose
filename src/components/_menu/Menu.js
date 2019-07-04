import React from 'react';
import './Menu.scss';

const LendingMenu=()=>{

    return(

        <div className="cols col-12">
            <nav>
                <ul className='_menu'>
                    <li><a href='#main'><i className="fas fa-home"></i> головна</a></li>
                    <li><a href='#about'><i className="fas fa-bookmark"></i> про нас</a></li>
                    <li><a href='#montesori'><i className="fas fa-user-graduate"></i> методики</a></li>
                    <li><a href='#inClub'><i className="fas fa-school"></i> вступ до клубу</a></li>
                    <li><a href='#calendar'><i className="far fa-calendar-alt"></i> календар</a></li>
                    <li><a href='#contacts'><i className="far fa-id-card"></i> контакти</a></li>
                </ul>
            </nav>
        </div>

    );


};

export default LendingMenu;