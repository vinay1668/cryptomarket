import React, {Component} from "react";
import './styles.css'
import dogecoin from '../images/cryptos/dogecoin.png';
import {Link} from "react-router-dom";
class Dogecoin extends Component{
   render(){
       return (
           <div>
             <Link to="./dogecoininfo">
               <h2 className ="dogecoin">Dogecoin</h2>
               </Link>
               <Link to="./dogecoininfo">
                 <img className="dogecoinimg" src={dogecoin}  alt ="dogecoincoin" />
                 </Link>
                 <Link to="./dogecoininfo">
                 <div
                class="card-body dogecoinprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{this.props.price}</h5>
                   </div>
                 </Link>
     
       </div>
       );
   }
    
   
}

export default Dogecoin;

