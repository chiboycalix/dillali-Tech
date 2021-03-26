/** @format */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loader from './components/Loader';
const Layout = React.lazy(() => import('./container/layout'));

const App = (props) => {
	return (

				<div className="App">
					<React.Suspense fallback={<Loader />}>
						<Router history={props.history}>
							<Switch>
								<Route path="/" component={Layout} />
							</Switch>
						</Router>
					</React.Suspense>
				</div>
	);
};

export default App;
