import React from "react";
import { Welcome, AboutMe, Skills, Projects, Contact } from "./comp";
import "./styles/style.scss";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<Switch>
			<Route path="/" component={Welcome} exact />
			<Route path="/aboutMe" component={AboutMe} />
			<Route path="/skills" component={Skills} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
			<Route component={Error} />
		</Switch>
	);
}

export default App;
