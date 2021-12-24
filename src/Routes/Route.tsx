import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LoginScreen from '../Screens/Account/Login/Login';
import ForgotpasswordScreen from '../Screens/Account/ForgotPassword/Forgotpassword';
import DashboardScreen from '../Screens/Dashboard/Dashboard';
import NotFound from '../Screens/404';
import UsersScreeen from '../Screens/Dashboard/User';

export default function Paths() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<DashboardScreen />} />
				<Route path='/account/login' element={<LoginScreen />} />
				<Route path='/account/reset' element={<ForgotpasswordScreen />} />
				<Route path='/account/users' element={<UsersScreeen />} />
			</Routes>
		</Router>
	);
}
