import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Bitcoininfo from "./components/Bitcoininfo";
import Etherinfo from "./components/Etherinfo";
import Dogecoininfo from "./components/Dogecoininfo";
import Dashinfo from "./components/Dashinfo";
import Litecoininfo from "./components/Litecoininfo";
import Zcashinfo from "./components/Zcashinfo";
import Moneroinfo from "./components/Moneroinfo";
import Cardanoinfo from "./components/Cardanoinfo";
import Binanceinfo from "./components/Binanceinfo";
import Stellinfo from "./components/Stellinfo";
import Tetherinfo from "./components/Tetherinfo";
import Rippleinfo from "./components/Rippleinfo";
import ScrollRestoration from "./components/Scrolltotop";
import ScrollToTop from './components/Scrolltotop';




ReactDOM.render(
  <div className ="main" >

  <Router>
    <ScrollToTop />

     <Route  path="/bitcoininfo" component={Bitcoininfo}/>
     <Route path="/etherinfo" component={Etherinfo}/>
     <Route path="/dogecoininfo" component={Dogecoininfo}/>
     <Route path="/dashinfo" component={Dashinfo}/>
     <Route path="/litecoininfo" component={Litecoininfo}/>
     <Route path="/zcashinfo" component={Zcashinfo}/>
     <Route path="/moneroinfo" component={Moneroinfo}/>
     <Route path="/cardanoinfo" component={Cardanoinfo}/>
     <Route path="/binanceinfo" component={Binanceinfo}/>
     <Route path="/stellarinfo" component={Stellinfo}/>
     <Route path="/tetherinfo" component={Tetherinfo}/>
     <Route path="/rippleinfo" component={Rippleinfo}/>

     <Route exact  path="/" component={App}/>
    

  </Router>
  </div>

  ,
  document.getElementById('root')
);

