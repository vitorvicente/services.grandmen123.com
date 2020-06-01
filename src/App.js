import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import STATUS from "./constants/Status"
import * as ROUTES from "./constants/Routes"

import Landing from "./pages/Landing"

import About from "./pages/About"
import Tos from "./pages/Tos"
import Vip from "./pages/Vip"
import Vouches from "./pages/Vouches"

import Services from "./pages/Services"

import MinecraftServices from "./pages/MinecraftServices"
import MinecraftOrder from "./pages/MinecraftOrder"
import MinecraftOrderOther from "./pages/MinecraftOrderOther"

import MinecraftOther from "./pages/MinecraftOther"
import DonationCraft from "./pages/DonationCraft"
import Enjin from "./pages/Enjin"
import LongTerm from "./pages/LongTerm"
import NetworkOrg from "./pages/NetworkOrg"
import PanelInst from "./pages/PanelInst"
import ServerMig from "./pages/ServerMig"
import ServerRes from "./pages/ServerRes"
import Tebex from "./pages/Tebex"
import Xenforo from "./pages/Xenforo"

import PluginConfig from "./pages/PluginConfig"

import ServerSetups from "./pages/ServerSetups"
import Bungee from "./pages/Bungee"
import Creative from "./pages/Creative"
import Factions from "./pages/Factions"
import KitPvP from "./pages/KitPvP"
import Lobby from "./pages/Lobby"
import Prison from "./pages/Prison"
import Skyblock from "./pages/Skyblock"
import Survival from "./pages/Survival"

import NonMC from "./pages/NonMC"
import NonMCOrder from "./pages/NonMCOrder"
import NonMCOrder from "./pages/NonMCOrderOther"

import AppDevelopment from "./pages/AppDevelopment"
import Consultation from "./pages/Consultation"
import Discord from "./pages/Discord"
import Software from "./pages/Software"
import Web from "./pages/Web"

import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Closed from "./pages/Closed"



function App() {
  if(STATUS){
	return (
      <Router className="App">
        <Switch>
          <Route component={Closed} />
        </Switch>
      </Router>
	);
  }

  return (
    <Router className="App">
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
		
        <Route exact path={ROUTES.ABOUT} component={About} />
		<Route exact path={ROUTES.TOS} component={Tos} />
		<Route exact path={ROUTES.VIP} component={Vip} />
		<Route exact path={ROUTES.VOUCHES} component={Vouches} />
		
		<Route exact path={ROUTES.SERVICES} component={Services} />
		
		<Route exact path={ROUTES.MC} component={MinecraftServices} />
		<Route exact path={ROUTES.MCORDER} component={MinecraftOrder} />
		<Route exact path={ROUTES.MCORDER2} component={MinecraftOrderOther} />
		
		<Route exact path={ROUTES.MCOTHER} component={MinecraftOther} />
		<Route exact path={ROUTES.MCOTHERDC} component={DonationCraft} />
		<Route exact path={ROUTES.MCOTHERE} component={Enjin} />
		<Route exact path={ROUTES.MCOTHERLTM} component={LongTerm} />
		<Route exact path={ROUTES.MCOTHERNO} component={NetworkOrg} />
		<Route exact path={ROUTES.MCOTHERP} component={PanelInst} />
		<Route exact path={ROUTES.MCOTHERSM} component={ServerMig} />
		<Route exact path={ROUTES.MCOTHERSR} component={ServerRes} />
		<Route exact path={ROUTES.MCOTHERT} component={Tebex} />
		<Route exact path={ROUTES.MCOTHERX} component={Xenforo} />
		
		<Route exact path={ROUTES.MCPC} component={PluginConfig} />
		
		<Route exact path={ROUTES.MCSS} component={ServerSetups} />
		<Route exact path={ROUTES.MCSSB} component={Bungee} />
		<Route exact path={ROUTES.MCSSC} component={Creative} />
		<Route exact path={ROUTES.MCSSF} component={Factions} />
		<Route exact path={ROUTES.MCSSK} component={KitPvP} />
		<Route exact path={ROUTES.MCSSL} component={Lobby} />
		<Route exact path={ROUTES.MCSSP} component={Prison} />
		<Route exact path={ROUTES.MCSSSB} component={Skyblock} />
		<Route exact path={ROUTES.MCSSS} component={Survival} />
		
		<Route exact path={ROUTES.NMC} component={NonMC} />
		<Route exact path={ROUTES.NMCO} component={NonMCOrder} />
		<Route exact path={ROUTES.NMCOO} component={NonMCOrderOther} />
		
		<Route exact path={ROUTES.NMCA} component={AppDevelopment} />
		<Route exact path={ROUTES.NMCC} component={Consultation} />
		<Route exact path={ROUTES.NMCD} component={Discord} />
		<Route exact path={ROUTES.NMCS} component={Software} />
		<Route exact path={ROUTES.NMCW} component={Web} />
		
		<Route exact path={ROUTES.CONTACT} component={Contact} />
		
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
