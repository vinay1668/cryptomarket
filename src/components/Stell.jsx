import React, {Component} from "react";
import './styles.css'
import stellar from "../images/cryptos/stellar.png";
import {Link} from "react-router-dom";


class Stell extends Component{
   render(){
       return (
           <div>
               <Link to="./stellarinfo">

               <h2 className ="stell">Stellar</h2>
               <img className="stellarimg" src={stellar}  alt ="stellar" />
               <div
                class="card-body stellarprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
               
                   </div>
                   </Link>
    
              
       
       </div>
       );
   }
    
   
}

export default Stell;


