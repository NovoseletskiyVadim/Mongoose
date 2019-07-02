import React from 'react';
import './Menu.scss';
import {Link} from './Router';

// 5. созжаем компонент Link
// Ключевой момент!!!!
/*

        все  что находится внутри компонента  это дети this.props.cildren

        const Link = (props)=>{

            console.log(props);
            return(
                <a href={props.to}>{props.children}</a>
            )
        }

*/
// выносим Link в отдельный модуль Router


// 

const Menu = () =>{

    return(
        <div className='menu'>
            <ul>
                <li> <Link to='/'>Головна</Link></li>
                <li><Link to='/aboutClub'>Про нас</Link></li>
                <li> <Link to='/montesori'>Методики</Link></li>
                <li><Link to='/inClub'>Вступ</Link></li>
                <li><Link to='/interesting'>Сім’я</Link></li>
                <li><Link to='/health'>Здоров’я</Link></li>
                <li><Link to='/photoAndEvents'>Фотогалерея</Link></li>
                <li><Link to='/contact'>Контакти</Link></li>
            </ul>

        </div>
    )
}

export default Menu;

//1. отключить дефолтное поведение браузера 
// 2. подключить чилдрены
// 3. window.location.href=""(с перезагрузкой страницы)
// 4. перемещение без перезагрузки window.location.hash="".....