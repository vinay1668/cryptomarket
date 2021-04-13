import React, {Component} from "react";
import cardano from "../images/cryptos/cardano.png";
import './styles.css'
import {Link} from "react-router-dom";

class Cardano extends Component{
   render(){
       return (
          <div>
              <Link to="./cardanoinfo">
              <h2 className ="cardano">Cardano</h2>
             <img className="cardanoimg" src={cardano}  alt ="cardano" />
             <div
                class="card-body cardanoprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
            
                   </div>   
                   </Link>   
       </div>
       );
   }
    
   
}

export default Cardano;

