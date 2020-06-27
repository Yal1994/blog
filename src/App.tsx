import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.less';
import RouteList from './router/router';

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					{RouteList.map((r) => {
						return (
							<Route
								key={r.path}
								exact={r.exact}
								component={r.component}
								path={r.path}
							></Route>
						);
					})}
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
