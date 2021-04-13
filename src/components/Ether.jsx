import React, {Component} from "react";
import './styles.css'
import ether from "../images/cryptos/etherium1.png"
import {Link} from "react-router-dom";

class Ether extends Component{
   render(){
       return (
           <div>
               <Link to="./etherinfo">
               <h2 className ="ether">Ethereum</h2>
               </Link>
                <Link to ="./etherinfo">
                  <img className="etherimg" src={ether}  alt ="bitcoin" />
                  </Link>
                  <Link to ="./etherinfo">
                                     <div
                class="card-body etherprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
                   </div>
             
                  </Link>
             
       
       </div>
       );
   }
    
   
}

export default Ether;


