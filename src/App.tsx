import React from 'react';
import {
	Router,
	HashRouter,
	Switch,
	Route,
	BrowserRouter,
} from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/project';
import './App.less';
import RouterLayout from './pages/routerLayout';
import ArticleList from './pages/articleList';

 function App() {

	const art = () => {
		return (
		<RouterLayout><ArticleList></ArticleList></RouterLayout>
		)
	}

	return (
		<>
			<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home}></Route>
							<Route  path="/article" component={art}></Route>
						<Route exact path="/d" componet={RouterLayout}>
						</Route>
					</Switch>
			</BrowserRouter>
			{/* <HashRouter>
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/article" component={ArticleList}></Route>
						<Route exact path="/project" component={Project}></Route>
					</Switch>
				</HashRouter> */}
		</>
	);
}

export default App;
