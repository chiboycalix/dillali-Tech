/** @format */

import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AdminRoutes, UserRoutes } from '../sidebar/routes';
import NotFoundComponent from '../../components/NotFoundComponent';

import './styles/layout.scss';
import Header from '../header';
import Sibebar from '../sidebar';
import Content from '../content';
import RightSidebar from '../rightsidebar'

const Layout = (props) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [appMode, setAppMode] = React.useState(props.history.location.pathname === '/' ? "app mode" : "admin mode");

	const toogleSideBar = () => {
		setIsOpen((value) => !value)
	}
	const sideBarUrl = appMode === "app mode" ? UserRoutes : AdminRoutes;


	return (
		<Router>
			<div className="layout__wrapper">
				<Header toogleSideBar={toogleSideBar} />

				<div className="layout__content">
					<Sibebar isOpen={isOpen} sideBarUrl={sideBarUrl} appMode={appMode} />
					<Content>
						<Switch>
							{sideBarUrl.map((route, idx) => {
								return route.component ? (
									<Route
										key={idx}
										path={route.path}
										exact={route.exact}
										name={route.name}
										render={(props) => <route.component {...props} />}
									/>
								) : null;
							})}
							<Route path="*" component={NotFoundComponent} />
						</Switch>
					</Content>
					<RightSidebar setAppMode={setAppMode} appMode={appMode} />
				</div>
			</div>
		</Router>
	);
};
export default Layout;
