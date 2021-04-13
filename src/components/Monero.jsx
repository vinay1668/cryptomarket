import React, {Component} from "react";
import './styles.css'
import monero from "../images/cryptos/monero.png";
import {Link} from "react-router-dom";


class Monero extends Component{
   render(){
       return (
           <div>
               <Link to="./moneroinfo">
               <h2 className="monero">Monero</h2>
               </Link>
               <Link to="./moneroinfo">
                <img className="moneroimg" src={monero}  alt ="monero" />
                </Link>
                <Link to="./moneroinfo">
                <div
                class="card-body moneroprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
                   </div>
                   </Link>
              
       </div>
       );
   }
    
   
}

export default Monero;


