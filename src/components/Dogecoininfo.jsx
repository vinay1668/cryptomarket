import React,{useState,useEffect} from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coinimg from "../images/cryptos/dogecoin.png";
import bits from "../images/cryptos/dogecoininfo.png";


function Etherinfo() {

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
    
     
    const[name,setname]=useState("");
    const[height,setheight]=useState("");
    const[peercount,setpeercount]=useState("");
    const[sent,setsent]=useState("");
    const[received,setreceived]=useState("");
    const[balance,setbalance]=useState("");
    const[ntx,setntx]=useState("");
    const[price,setprice]=useState()
    const[marketcaprank,setmarketcaprank]=useState();
    const[highinday,sethighinday]=useState()
    const[lowinday,setlowinday]=useState()
    const[changeinday,setchangeinday]=useState()
    const[maxsupply,setmaxsupply]=useState();
    const[circulatingsupply,setcirculatingsupply]=useState();
    const[ath,setath]=useState();



    



    const getDetails = () => {
        axios.get("https://api.blockcypher.com/v1/doge/main").then(
          (response) => {
              setname(response.data.name.substring(0,response.data.name.indexOf('.')));
              setheight(response.data.height);
              setpeercount(response.data.peer_count);
              
         
            
          }
        );

         axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=dogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false"
         )
        .then((response) =>{
            setprice( "₹ " + response.data[0].current_price);
            setmarketcaprank(response.data[0].market_cap_rank);
            sethighinday("₹ " + response.data[0].high_24h);
            setlowinday("₹ " + response.data[0].low_24h);
            setchangeinday("₹ " + response.data[0].price_change_24h.toFixed(2));
            setmaxsupply(response.data[0].max_supply);
            setcirculatingsupply(response.data[0].circulating_supply.toFixed(0));
            setath("₹ " + response.data[0].ath);
           
             
        })
     
    }
   
    const getAddress=() =>
    {
        
        
        var add="https://api.blockcypher.com/v1/doge/main/addrs/" + document.getElementById("inputaddress").value + "/balance"
        axios.get(add).then(
        (response) => {
            setsent(parseFloat(response.data.total_sent/(Math.pow(10,8))).toFixed(0)+" DOGE");
            setbalance(parseFloat(response.data.balance/(Math.pow(10,8))).toFixed(0)+" DOGE");
            setreceived(parseFloat(response.data.total_received/(Math.pow(10,8))).toFixed(0)+" DOGE");
            setntx(response.data.n_tx);

        }
        );
    }


   

   
     return(
         <div onLoad={getDetails}>
             <h1 className="doge">Dogecoin</h1>
            <img className="bitimg" src={coinimg}  alt ="dogecion" />
            <p>Dogecoin Ð is a cryptocurrency invented by software engineers Billy Markus and Jackson Palmer, 
                who decided to create a payment system that is instant, fun, and free from traditional banking fees. 
                Dogecoin features the face of the Shiba Inu dog from the "Doge" meme as its logo and namesake.It was introduced on December 6, 2013, 
                and quickly developed its own online community, reaching a market capitalization of US $5,382,875,000 on January 28, 2021.
                Dogecoin started its initial coin production schedule with 100 billion coins in circulation. 
                
            </p>
            <img className="bits" src={bits} alt="{bitcoin image}"/>

            <h1 className="blockchain">Blockchain Explorer</h1>
         

          <div 
           class="card-body mycard namecard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",textAlign:"center"}}>Name</h3>
           <h3 style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{name}</h3>
         </div>
         <div
           class="card-body mycard blockcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"30px"}}>Total Blocks</h3>
           <h3 style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{height}</h3>
         </div>
         <div
           class="card-body mycard nodecard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"30px"}}>Total Nodes</h3>
           <h3 style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{peercount}</h3>
         </div>



  

           <h1 className="balance" >Check Balance</h1>
           <h3 className="address" >Address:</h3>
           <input type="text" class="form-control key" id="inputaddress"></input>
           <button onClick ={getAddress} type="button" className="btn btn-primary click"><i className="fa fa-search" aria-hidden="true"></i></button>
           
           
           <div
           class="card-body mycard receivedcard">
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"45px"}}>Received</h3>
           <h3 style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{received}</h3>
         </div>

         <div
           class="card-body mycard sentcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"70px"}}>Sent</h3>
           <h3 style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{sent}</h3>
         </div>

         <div
           class="card-body mycard balancecard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"60px"}}>Balance</h3>
           <h3 style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{balance}</h3>
         </div>

         <div
           class="card-body mycard transactioncard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"30px"}}> Transactions</h3>
           <h3 style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{ntx}</h3>
         </div>


          
           
          
  

           <h1 className="market" >Dogecoin Market</h1>


          

           <div
           class="card-body mycard ratecard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"20px"}}>Dogecoin Price</h3>
           <h3  style ={{fontSize:"30px",position:"relative",top:"80px",textAlign:"center"}} class="card-text">{price}</h3>
         </div>

           
        

      
         <div
           class="card-body mycard highcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"20px"}}>All Time High</h3>
           <h3  style ={{fontSize:"30px",position:"relative",top:"80px",textAlign:"center"}} class="card-text">{ath}</h3>
         </div>

           


           <div
           class="card-body mycard rankcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Market Cap Rank</h3>
           <h3  style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{marketcaprank}</h3>
         </div>


           

  

           <div
           class="card-body mycard highdaycard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>High in 24 Hours</h3>
           <h3  style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{highinday}</h3>
         </div>



           <div
           class="card-body mycard lowdaycard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Low in 24 Hours</h3>
           <h3  style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{lowinday}</h3>
         </div>

           
         

           <div
           class="card-body mycard changecard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Change in 24 Hours</h3>
           <h3 style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{changeinday}</h3>
         </div>

           <div
           class="card-body mycard maxcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Maximum Supply</h3>
           <h3  style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{maxsupply}</h3>
         </div>


      

           <div
           class="card-body mycard circulatingcard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Circulating Dogecoin</h3>
           <h3  style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{circulatingsupply}</h3>
         </div>

        
         <footer>
             <a className="end uno" href=" https://live.blockcypher.com/doge/" >blockcypher/doge</a>
             <a className="end due" href=" https://www.reddit.com/r/dogecoin/" >r/dogecoin</a>
             <a className="end tre" href=" https://dogecoin.com/" >dogecoin.com</a>
          
         </footer>

         </div>
     );

    
}

export default Etherinfo;