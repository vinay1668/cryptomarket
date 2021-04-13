import React, {Component} from "react";
import './styles.css'
import litecoin from "../images/cryptos/litecoin.png"
import {Link} from "react-router-dom";


class Litecoin extends Component{
   render(){
       return (
           <div>
               <Link to="./litecoininfo">
               <h2 className = "litecoin">Litecoin</h2>
               </Link>
               <Link to="./litecoininfo">
               <img className="litecoinimg" src={litecoin}  alt ="litecoin" />
               </Link>
               <Link to="./litecoininfo">
                    <div
                class="card-body litecoinprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
                   </div>
                </Link>
               
    
       </div>
       );
   }
    
   
}

export default Litecoin;


