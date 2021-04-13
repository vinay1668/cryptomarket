import React, {Component} from "react";
import './styles.css'
import ripple from "../images/cryptos/ripple.png";
import {Link} from "react-router-dom";


class Ripple extends Component{

   render(){
       return (
           <div >
               <Link to="./rippleinfo">
               <h2 className = 'ripple'>Ripple</h2>
              
                <img className="rippleimg" src={ripple}  alt ="ripple" />
                <div
                class="card-body rippleprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
                   </div>
                   </Link>
            
       
       </div>
       );
   }
    
   
}

export default Ripple;


