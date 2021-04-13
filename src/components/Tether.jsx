import React, {Component} from "react";
import './styles.css';
import tether from '../images/cryptos/tether.png';
import {Link} from "react-router-dom";


class Tether extends Component{
   render(){
       return (
           <div>
               <Link to="./tetherinfo">
               <h2 className ="tether">Tether</h2>
                <img className="tetherimg" src={tether}  alt ="tether" />
                <div
                class="card-body tetherprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
                   </div>
                   </Link>
       

       
       </div>
       );
   }
    
   
}

export default Tether;


