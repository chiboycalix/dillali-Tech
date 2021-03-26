/** @format */

import React from 'react';
import './styles/sidebar.scss';
import { AdminSidebarLinks, UserSidebarLinks } from './sidebarLinks';
import { Link, useHistory } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';

const Sidebar = (props) => {
	let history = useHistory();
	const onlyWidth = useWindowWidth();


	const [activeLink, setActiveLink] = React.useState(history.location.pathname);

	const handleSetActiveLink = (item) => {
		setActiveLink(item.path);
	};

	const links = props.appMode === "app mode" ? UserSidebarLinks : AdminSidebarLinks;


	

	return (
		<div className="sidebar__wrapper">
			<ul className={`desktop ${props.appMode === 'app mode' ? "app": "admin"}`}>
				{links.map((link) => {
					return (
						<li key={link.id} 
						onClick={() => handleSetActiveLink(link)}
						className={`links ${activeLink === link.path} || ${link.path === '/entry-one' || '/admin-one'} && active`
					}>
							<Link to={link.path}>
								<span>{link.icon}</span>
								<p>{onlyWidth < 420 ? null : link.name}</p>
							</Link>
						</li>
					);
				})}
			</ul>

		<ul className={props.isOpen ? "mobile": "close"}>
		{links.map((link) => {
			return (
				<li 
				key={link.id} onClick={() => handleSetActiveLink(link)} 
				className={`links ${activeLink === link.path} || ${link.path === '/entry-one' || '/admin-one'} && active`
					}>
					<Link to={link.path}>
						<span>{link.icon}</span>

						<p>{onlyWidth < 420 ? null : link.name}</p>
					</Link>
				</li>
			);
		})}
		</ul>
		</div>
	);
};
export default Sidebar;
