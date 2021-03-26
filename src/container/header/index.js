/** @format */

import React from 'react';
import './styles/header.scss';

const Header = (props) => {

	return (
		<header>
			<div className="logo">
			<i className="fas fa-bars" onClick={props.toogleSideBar}></i>
			<h3>Logo</h3>
			</div>
			<div></div>
		</header>
	);
};
export default Header;
