import React, {Component} from "react";
import './styles.css'
import zcash from "../images/cryptos/zcash.png";
import {Link} from "react-router-dom";


class Zcash extends Component{
    

    
   render(){
       return (
           <div>
               <Link to="./zcashinfo">
               <h2 className ="zcash">Zcash</h2>
               </Link>
               <Link to="./zcashinfo">
                <img className="zcashimg" src={zcash}  alt ="zcash" />
                </Link>
                <Link to="./zcashinfo">
                <div
                class="card-body zcashprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
                   </div>
                   </Link>
       </div>
       );
    }
   
}

export default Zcash;


