import React, {Component} from 'react';
import './MobileMenu.scss';

// const MobileMenu=()=>{

//     return(
//         <div className='row forMobile'>
//             <div className='cols col-12'>
//                 <a id="touch-menu" className="mobile-menu" href="#"><i className="icon-reorder"></i>відкрити меню  <i  className="fas fa-align-justify"></i> </a>
//                 <nav>
//                     <ul className="mobileMenu">
//                         <li  ><a href="#main"><i className="icon-home"></i>головна</a></li>
//                         <li  ><a  href="#about">про нас</a></li>
//                         <li  ><a  href="#montesori">методики</a></li>
//                         <li  ><a href="#inClub">вступ до клубу</a></li>
//                         <li  ><a href="#calendar">календар</a></li>
//                         <li  ><a href="#contacts">контакти</a></li>
//                         <li  ><a className="CallMe" href="#"><i className="icon-home"></i>зателефонувати:</a></li>
//                         <li  > <a href="tel:+380976037658"> <i className="fas fa-phone"></i> +38(068)554-65-84</a></li>
//                         <li  > <a href="tel:+380509253750"> <i className="fas fa-phone"></i> +38(095)578-18-22</a></li>                       
//                     </ul>        
//                 </nav>      
//             </div>
//         </div>

//     );
// };


class MobileMenu extends Component{

    constructor(){

        super();
        this.handlerDropDownClick=this.handlerDropDownClick.bind(this);
        this.state={dropDownVisible:false};

    };

    handlerDropDownClick(event){
        this.setState({dropDownVisible:!this.state.dropDownVisible});
    };



    render(){

        let dropDownVisible=this.state.dropDownVisible;
        console.log('dropDownVisible='+dropDownVisible);
        return(
            <div className='row forMobile'>
                <div className='cols col-12'>
                    <a  className="mobile-menu" href="#" onClick={this.handlerDropDownClick}><i className="icon-reorder"></i>відкрити меню  <i  className="fas fa-align-justify"></i> </a>
                    <nav>
                        <ul className="mobileMenu" onClick={this.handlerDropDownClick} style={{display: dropDownVisible ? 'block' : 'none'}}>
                            <li  ><a href="#main"><i className="icon-home"></i>головна</a></li>
                            <li  ><a  href="#about">про нас</a></li>
                            <li  ><a  href="#montesori">методики</a></li>
                            <li  ><a href="#inClub">вступ до клубу</a></li>
                            <li  ><a href="#calendar">календар</a></li>
                            <li  ><a href="#contacts">контакти</a></li>
                            <li  ><a href="#contacts"><i className="fab fa-facebook-f fa-lg"></i> facebook</a></li>
                            <li  ><a href="#contacts"><i className="fab fa-instagram fa-lg"></i> instagram</a></li>
                            <li  ><a className="CallMe"><i className="icon-home"></i>зателефонувати:</a></li>
                            <li  > <a href="tel:+380976037658"> <i className="fas fa-phone"></i> +38(068)554-65-84</a></li>
                            <li  > <a href="tel:+380509253750"> <i className="fas fa-phone"></i> +38(095)578-18-22</a></li>                       
                        </ul>        
                    </nav>      
                </div>
            </div>
        );
    }
}

export default MobileMenu;
