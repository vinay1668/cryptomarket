import React,{useState,useEffect} from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coinimg from "../images/cryptos/etherium1.png";
import bits from "../images/cryptos/etherinfo.png";


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
    const[txid,settxid]=useState("")
    const[sent,setsent]=useState("");
    const[received,setreceived]=useState("");
    const[balance,setbalance]=useState("");
    const[ntx,setntx]=useState("");
    const[price,setprice]=useState();
    const[marketcaprank,setmarketcaprank]=useState();
    const[highinday,sethighinday]=useState()
    const[lowinday,setlowinday]=useState()
    const[changeinday,setchangeinday]=useState()
    const[maxsupply,setmaxsupply]=useState();
    const[circulatingsupply,setcirculatingsupply]=useState();
    const[ath,setath]=useState();



    



    const getDetails = () => {
        axios.get("https://api.blockcypher.com/v1/eth/main").then(
          (response) => {
              setname(response.data.name.substring(0,response.data.name.indexOf(".")));
              setheight(response.data.height);
              setpeercount(response.data.peer_count);
         
            
          }
        );

         axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false"
         )
        .then((response) =>{
            setprice( "₹ " + response.data[0].current_price);
            setmarketcaprank(response.data[0].market_cap_rank);
            sethighinday("₹ " + response.data[0].high_24h);
            setlowinday("₹ " + response.data[0].low_24h);
            setchangeinday("₹ " + response.data[0].price_change_24h.toFixed(0));
            setmaxsupply(response.data[0].max_supply);
            setcirculatingsupply(response.data[0].circulating_supply.toFixed(0));
            setath("₹ " +response.data[0].ath);
           
             
        })
     
    }
   
    const getAddress=() =>
    {
        
        
        var add="https://api.blockcypher.com/v1/eth/main/addrs/" + document.getElementById("inputaddress").value + "/balance"
        axios.get(add).then(
        (response) => {
            setsent(parseFloat(response.data.total_sent/(Math.pow(10,18))).toFixed(1)+" ETH");
            setbalance(parseFloat(response.data.balance/(Math.pow(10,18))).toFixed(1)+" ETH");
            setreceived(parseFloat(response.data.total_received/(Math.pow(10,18))).toFixed(1)+" ETH");
            setntx(response.data.n_tx);

        }
        );
    }


   

   
     return(
         <div onLoad={getDetails}>
             <h1 className="et"> Ethereum</h1>
            <img className="bitimg " src={coinimg}  alt ="bitcoin" />
            <p>Ethereum is a decentralized, open-source blockchain with smart contract functionality. 
              Ether (ETH) is the native cryptocurrency of the platform. 
              It is the second-largest cryptocurrency by market capitalization, after Bitcoin.
              Ethereum is the most actively used blockchain.Ethereum was proposed in 2013 by programmer Vitalik Buterin. 
              Development was crowdfunded in 2014, and the network went live on 30 July 2015, with an initial supply of 72 million coins.
              Ethereum is used for decentralized finance, the creation and exchange of NFTs.
            </p>
            <img className="bits" src={bits} alt="{ethereum image}"/>
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


          
           
          
  

           <h1 className="market" >Ethereum Market</h1>


          

           <div
           class="card-body mycard ratecard" >
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"20px"}}>Ethereum Price</h3>
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
           <h3 className="inner" style ={{position:"relative",top:"10px",left:"5px",textAlign:"center"}}>Circulating Ethereum</h3>
           <h3  style ={{fontSize:"30px",position:"relative",top:"50px",textAlign:"center"}} class="card-text">{circulatingsupply}</h3>
         </div>

        
         <footer>
             <a className="end uno" href="https://live.blockcypher.com/eth/" >blockcypher/eth</a>
             <a className="end due" href="https://www.reddit.com/r/ethereum/" >r/ethereum</a>
             <a className="end tre" href="https://ethereum.org/en/" >ethereum.org</a>
          
         </footer>

         </div>
     );

    
}

export default Etherinfo;