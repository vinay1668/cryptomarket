import React from "react";
import './styles.css'
import coin from "../images/cryptos/dash.png";
import './bitcoininfo.css'

import {Link} from "react-router-dom";



function Dash(props){

    return(
        <div>
              
           <Link to="./dashinfo">
             <img className="dashimg" src={coin}  alt ="dash" />
             </Link>
             <Link to="./dashinfo">
             <h2 className ="dash">Dash</h2>
             </Link>
             
             <Link to="./dashinfo">
                   <div
                class="card-body dashprice" >
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{props.price}</h5>
                   </div>
             
             </Link>
            
 
      </div>
    );
}

export default Dash;