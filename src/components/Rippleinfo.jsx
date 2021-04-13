import React,{useState,useEffect} from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coinimg from "../images/cryptos/ripple.png"
import bits from "../images/cryptos/rippleinfo.png";


function Rippleinfo() {
    

  useEffect(() =>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".mycard").forEach(card => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
          toggleActions:"play none none none"
        }
      });
    
      tl.to(card, {
        duration: 2,
        opacity: 1
      });
    });
    
    
      })
    
    const[price,setprice]=useState()
    const[marketcaprank,setmarketcaprank]=useState();
    const[highinday,sethighinday]=useState()
    const[lowinday,setlowinday]=useState()
    const[changeinday,setchangeinday]=useState()
    const[maxsupply,setmaxsupply]=useState();
    const[circulatingsupply,setcirculatingsupply]=useState();
    const[ath,setath]=useState();



    



    const getDetails = () => {

         axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) =>{
            setprice( "₹ " + response.data[0].current_price);
            setmarketcaprank(response.data[0].market_cap_rank);
            sethighinday("₹ " + response.data[0].high_24h);
            setlowinday("₹ " + response.data[0].low_24h);
            setchangeinday("₹ " + response.data[0].price_change_24h.toFixed(0));
            setmaxsupply(response.data[0].max_supply);
            setcirculatingsupply(response.data[0].circulating_supply.toFixed(0));
            setath("₹ "+ response.data[0].ath);
           
             
        })
     
    }
   
    


   

   
     return(
         <div onLoad={getDetails}>
             <h1>Ripple</h1>
            <img className="bitimg" src={coinimg}  alt ="ripple" /> 
            <p>
            Ripple is a real-time gross settlement system, currency exchange and remittance network created by Ripple Labs Inc., a US-based technology company. 
            Released in 2012, Ripple is built upon a distributed open source protocol, and supports tokens representing fiat currency, cryptocurrency, commodities, 
            or other units of value such as frequent flier miles or mobile minutes.
            The ledger employs the native cryptocurrency known as XRP.
            In December 2020, Ripple Labs and two of its executives were sued by the U.S. Securities and Exchange Commission (SEC) for selling XRP tokens, 
            which the SEC classified as unregistered securities.
          </p>
            <img className="bits" src={bits} alt="{bitcoin image}"/>
            <h1 className="retard" >Ripple Market</h1>


          

           <div
           class="card-body mycard retardpricecard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"20px"}}>Ripple Price</h3>
           <h3 style ={{position:"relative",top:"80px",textAlign:"center"}} class="card-text inner">{price}</h3>
         </div>

           
        

      
         <div
           class="card-body mycard retardhighcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"20px"}}>All Time High</h3>
           <h3 style ={{position:"relative",top:"80px",textAlign:"center"}} class="card-text inner">{ath}</h3>
         </div>

           


           <div
           class="card-body mycard retardrankcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Market Cap Rank</h3>
           <h3 style ={{position:"relative",top:"50px",textAlign:"center"}} class="card-text inner">{marketcaprank}</h3>
         </div>


           

  

           <div
           class="card-body mycard retardhighdaycard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>High in 24 Hours</h3>
           <h3 style ={{position:"relative",top:"50px",textAlign:"center"}} class="card-text inner">{highinday}</h3>
         </div>



           <div
           class="card-body mycard retardlowdaycard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Low in 24 Hours</h3>
           <h3 style ={{position:"relative",top:"50px",textAlign:"center"}} class="card-text inner">{lowinday}</h3>
         </div>

           
         

           <div
           class="card-body mycard retardchangecard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Change in 24 Hours</h3>
           <h3 style ={{position:"relative",top:"50px",textAlign:"center"}} class="card-text inner">{changeinday}</h3>
         </div>

           <div
           class="card-body mycard retardmaxcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Maximum Supply</h3>
           <h3 style ={{position:"relative",top:"50px",textAlign:"center"}} class="card-text inner">{maxsupply}</h3>
         </div>


      

           <div
           class="card-body mycard retardcirculatingcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Circulating Ripple</h3>
           <h3 className="inner" style ={{position:"relative",top:"50px",textAlign:"center"}} class="card-text inner">{circulatingsupply}</h3>
         </div>

        
         <footer>
             <a className="end retarduno" href="https://blockchair.com/ripple" >Blockchair/Ripple</a>
             <a className="end retarddue" href="https://www.coingecko.com/en" >coingecko</a>
             <a className="end retardtre" href="https://ripple.com/" >Ripple.com</a>
          
         </footer>
    
         </div>
     );

    
}

export default Rippleinfo;