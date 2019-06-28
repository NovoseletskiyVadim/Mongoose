import React from 'react';
import './Main.css';
import './../menu/Menu';
import Menu from './../menu/Menu';
import {Route} from './../menu/Router';
import Home from '../home/Home';
import AboutClub from './../aboutClub/AboutClub';
import Montesori from './../montesori/Montesori';
import InClub from './../inClub/InClub';
import Interesting from './../interesting/Interesting';
import Contact from './../contact/Contact';


// пример передачи компонента в props
class Route1 extends  React.Component{
    render(){
        // посмотрим пропсы
        console.log(this.props );
        const {component,render}=this.props;
        if(component){
            // вытащим компонент из props
            const {component}=this.props;
            // и создадим этот компонент 
            return React.createElement(component);
        };

        if(render){
            return render();
        }
        
    }
}



const Main =()=>{

   
    return( 
        <div className='main'>

            <Menu/>
            

            {/* <Route1 exact path='/' component={Home}/>
            <Route1 exact path='/' component={Portfolio}/> */}
            {/* <Route exact path='/' component={Resume}/> */}
            {/* <Route exact path='/' component={About}/> */}
            {/* <Route exact path='/' component={Contact}/> */}
            {/* <Route1 exact path='/re' render={()=><p>Сделано в кузнице</p>}/> */}



            {/* exact - проверяет полное совпадение пути  path */}
            <Route exact path='/' component={Home}/>
            <Route path='/aboutClub' component={AboutClub}/>
            <Route exact path='/montesori' component={Montesori}/>
            <Route exact path='/inClub' component={InClub}/>
            <Route exact path='/interesting' component={Interesting}/>
            
            <Route exact path='/contact' component={Contact}/>
            
            
            <Route exact path='/re' render={()=><p>Сделано в кузнице</p>}/>
            
            
        </div>
    )
       
    
}

export default Main;