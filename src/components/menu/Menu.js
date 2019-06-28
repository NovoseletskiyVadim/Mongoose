import React from 'react';
import './Menu.css';
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
                <li><Link to='/aboutClub'>Про Клуб</Link></li>
                <li> <Link to='/montesori'>Методики Монтесорі та...</Link></li>
                <li><Link to='/inClub'>Вступ у Клуб</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

        </div>
    )
}

export default Menu;

//1. отключить дефолтное поведение браузера 
// 2. подключить чилдрены
// 3. window.location.href=""(с перезагрузкой страницы)
// 4. перемещение без перезагрузки window.location.hash="".....