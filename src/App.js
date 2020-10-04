import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import RiddlePage from './RiddlePage'
import { introText } from './riddles'

const IntroCard = () => {
	return (
		<div class="card blue-grey darken-1">
			<div class="card-content white-text">
				<span class="card-title">Загадки Эллы</span>
				<p>{introText}</p>
			</div>
			<div class="card-action">
				<a class="waves-effect waves-light btn" href="/1">Идти</a>
			</div>
		</div>
	)
}

const App = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={() => <IntroCard />} />
					<Route path="/1" exact component={() => <RiddlePage />} />
					<Route path="/2" exact component={() => <RiddlePage />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
