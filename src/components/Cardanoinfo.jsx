import React,{useState,useEffect} from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coinimg from "../images/cryptos/cardano.png";
import bits from "../images/cryptos/cardanoinfo.png";


function Moneroinfo() {

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

         axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) =>{
            setprice( "₹ " + response.data[0].current_price);
            setmarketcaprank(response.data[0].market_cap_rank);
            sethighinday("₹ " + response.data[0].high_24h);
            setlowinday("₹ " + response.data[0].low_24h);
            setchangeinday("₹ " + response.data[0].price_change_24h.toFixed(1));
            setmaxsupply(response.data[0].max_supply);
            setcirculatingsupply(response.data[0].circulating_supply.toFixed(0));
            setath("₹ " + response.data[0].ath);
           
             
        })
     
    }
   
    


   

   
     return(
         <div onLoad={getDetails}>
             <h1>Cardano</h1>
            <img className="bitimg" src={coinimg}  alt ="cardano" /> 
            <p>
            Cardano is a cryptocurrency network and open source project that aims to run a public blockchain platform for smart contracts.
            Cardano's internal cryptocurrency is called Ada.
            The platform began development in 2015 and was launched in 2017 by Charles Hoskinson, a co-founder of Ethereum and BitShares.
            Hoskinson left Ethereum after a dispute with its co-founder Vitalik Buterin; Hoskinson wanted to accept venture capital and create a for-profit entity while Buterin wanted to keep it running as a nonprofit organization.
            The platform is named after Gerolamo Cardano and the cryptocurrency after Ada Lovelace.








            </p>
            <img className="bits" src={bits} alt="{bitcoin image}"/>
            <h1 className="retard" >Cardano Market</h1>


          

           <div
           class="card-body mycard retardpricecard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"20px"}}>Cardano Price</h3>
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
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Circulating Cardano</h3>
           <h3 className="inner" style ={{position:"relative",top:"50px",textAlign:"center"}} class="card-text inner">{circulatingsupply}</h3>
         </div>

        
         <footer>
             <a className="end retarduno" href="https://blockchair.com/cardano" >Blockchair/Cardano</a>
             <a className="end retarddue" href="https://www.coingecko.com/en" >coingecko</a>
             <a className="end retardtre" href="https://cardano.org/" >Cardano.org</a>
          
         </footer>
     
          
           




         
           
           


         </div>
     );

    
}

export default Moneroinfo;