/** @format */

import React from 'react';
import './styles/content.scss';

const Content = (props) => {
	return <div>
			<div className="content__wrapper">
			{props.children}
		</div>
	</div>;
};
export default Content;
