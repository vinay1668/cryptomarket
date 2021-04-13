import React from "react";
import './styles.css'
import bitcoin from "../images/cryptos/bitcoin.png";
import './bitcoininfo.css'
import {Link} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Bitcoin(props){


  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".coinprice",{
    scrollTrigger:{
      trigger:".coinprice",
      toggleActions:"play none none none",
      start:"top center"
    },
    opacity:1,
    duration:2
  })

    return(
        <div>
              
           <Link to="./bitcoininfo">
             <img className="bitcoinimg" src={bitcoin}  alt ="bitcoin" />
             </Link>
             <Link to="./bitcoininfo">
             <h2 className ="bitcoin">Bitcoin</h2>
             </Link>
             
             <Link to="./bitcoininfo">
                   <div
                class="card-body bitcoinprice" style={{}}>
               <h5 style ={{position:"relative",left:"0px",bottom:"10px",textAlign:"center"}}>{props.price}</h5>
                   </div>
             
             </Link>
            
 
      </div>
    );
}

export default Bitcoin;