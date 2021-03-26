/** @format */

import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../../components/Loader';

const AdminOne = Loadable({
	loader: () => import('../../pages/AdminPages/admin1'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});
const AdminTwo = Loadable({
	loader: () => import('../../pages/AdminPages/admin2'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});
const AdminThree = Loadable({
	loader: () => import('../../pages/AdminPages/admin3'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});

const entryOne = Loadable({
	loader: () => import('../../pages/UserPages/entry1'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});
const entryTwo = Loadable({
	loader: () => import('../../pages/UserPages/entry2'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});
const entryThree = Loadable({
	loader: () => import('../../pages/UserPages/entry3'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});
const entryFour = Loadable({
	loader: () => import('../../pages/UserPages/entry4'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});
const entryFive = Loadable({
	loader: () => import('../../pages/UserPages/entry5'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});

const AdminDashboard = Loadable({
	loader: () => import('../../pages/AdminPages/dashbaord'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});

const UserDashboard = Loadable({
	loader: () => import('../../pages/UserPages/dashboard'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});



export const AdminRoutes = [
	{
		path: '/admin-dashboard',
		name: 'Admin One',
		exact: true,
		component: AdminDashboard,
	},
	{
		path: '/admin-one',
		name: 'Admin One',
		exact: true,
		component: AdminOne,
	},
	{
		path: '/Admin-two',
		name: 'Admin Two',
		exact: true,
		component: AdminTwo,
	},
	{
		path: '/Admin-three',
		name: 'Admin three',
		exact: true,
		component: AdminThree,
	}

];

export const UserRoutes = [
	{
		path: '/',
		name: 'User Dashboard',
		exact: true,
		component: UserDashboard,
	},
	{
		path: '/entry-one',
		name: 'Entry One',
		exact: true,
		component: entryOne,
	},
	{
		path: '/entry-two',
		name: 'Entry Two',
		exact: true,
		component: entryTwo,
	},
	{
		path: '/entry-three',
		name: 'Entry Three',
		exact: true,
		component: entryThree,
	},
	{
		path: '/entry-four',
		name: 'Entry Four',
		exact: true,
		component: entryFour,
	},

	{
		path: '/entry-five',
		name: 'Entry Five',
		exact: true,
		component: entryFive,
	},
];
