import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import Merch from "./MerchComponent";
import BlobDad from "./BlobDadComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route path="/home" component={Home} />
					<Route exact path="/merch" component={Merch} />
          <Route exact path="/blobdad" component={BlobDad}/>
          <Route exact path="/contactus" component={Contact}/>
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
