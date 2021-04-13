import React, {Component} from "react";
import './styles.css'
import binance from '../images/cryptos/binance.png';
import {Link} from "react-router-dom";


class Binance extends Component{
   render(){
       return( 
       <div>
           <Link to="./binanceinfo">
           <h2 className ="binance">Binance</h2>
           <img className="binanceimg" src={binance}  alt ="binance" />
           <div
                class="card-body binanceprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
                   </div>
                   </Link>
       </div>
       );
   }
    
   
}

export default Binance;


