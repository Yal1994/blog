import React from 'react';
import { Router, HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';
import Project from './pages/project';
import './App.less'
function App() {
	return (
		<>
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/article" component={Article}></Route>
				<Route exact path="/project" component={Project}></Route>
			</Switch>
		</HashRouter>
		</>
	);
}

export default App;
