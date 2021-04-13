
import React, {useState} from 'react';
import axios from "axios";
import Stell from './Stell';
import Bitcoin from './Bitcoin';
import Binance from './Binance';
import Dogecoin from './Dogecoin';
import Cardano from './Cardano';
import Tether from './Tether';
import cartoon from '../images/ct.png';
import Ripple from './Ripple';
import Litecoin from './Litecoin';
import Ether from './Ether';
import Zcash from './Zcash';
import Monero from './Monero';
import Dash from './Dash';
import insta from "../images/insta.png";
import titlepic from "../images/titlepic.png";
import './styles.css';



function App() {

  const[bitcoin,setbitcoin] = useState('');
  const[ether,setether] = useState('');
  const[ripple,setripple] = useState('');
  const[litecoin,setlitecoin] = useState('');
  const[zcash,setzcash] = useState('');
  const[dogecoin,setdogecoin] = useState('');
  const[monero,setmonero] = useState('');
  const[cardano,setcardano] = useState('');
  const[binance,setbinance] = useState('');
  const[stellar,setstellar] = useState('');
  const[tether,settether] = useState('');
  const[dash,setdash]=useState("");
  const getDetails = () => {
    axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cdash%2Clitecoin%2Cripple%2Czcash%2Cdevcoin%2Cmonero%2Ccardano%2Cbinancecoin%2Cstellar%2Ctether&vs_currencies=inr").then(
      (response) => {
        setbitcoin("₹ " + response.data.bitcoin.inr);
        setether("₹ " + response.data.ethereum.inr);
        setripple("₹ " + response.data.ripple.inr);
        setlitecoin("₹ " + response.data.litecoin.inr);
        setzcash("₹ " + response.data.zcash.inr);
        setdogecoin("₹ " + response.data.dogecoin.inr);
        setmonero("₹ " + response.data.monero.inr);
        setcardano("₹ " + response.data.cardano.inr);
        setbinance("₹ " + response.data.binancecoin.inr);
        setstellar("₹ " + response.data.stellar.inr);
        settether("₹ " + response.data.tether.inr);
        setdash("₹ " + response.data.dash.inr);

      }
    )
  }
  return(

    <div className="b" onLoad = {getDetails}>

          <h1 className="title">rypto</h1>
          <h1 className="titleend">Market</h1>
          <img className="titlepic" src={titlepic} alt="title"/>
          <h1 className="retardtitle">Crypto</h1>
          <h1 className="retardtitleend">Market</h1>

      <img className="cartoon" src={cartoon}  alt ="cartoon" />
     
   <Bitcoin price = {bitcoin}/>
   <Ether price ={ether} />
   <Dogecoin price ={dogecoin}/>
   <Dash price={dash}/>
   <Ripple price= {ripple}/>
   <Litecoin price ={litecoin} />
   <Zcash price={zcash}/>
   <Monero price ={monero} />
   <Cardano price ={cardano}/>
   <Binance price ={binance}/>
   <Stell price ={stellar}/>
   <Tether price ={tether} />

   <footer>
            <img className="instaicon" src={insta} alt="instagram icon"/>
            <a className="instalink end" href="https://www.instagram.com/ai_rules/" >ai_rules</a>

             <a className="end author" href="https://github.com/vinay1668">developed by vinay and santosh</a>
             <b className="end copyright" >copyright © 2021</b>
          
         </footer>
  </div>


  );
}

export default App;