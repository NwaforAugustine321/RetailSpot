import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LoginScreen from '../Screens/Account/Login/Login';
import ForgotpasswordScreen from '../Screens/Account/ForgotPassword/Forgotpassword';
import DashboardScreen from '../Screens/Dashboard/Dashboard';
import NotFound from '../Screens/404';
import UsersScreeen from '../Screens/Dashboard/User';
import CreatUserScreen from '../Screens/Dashboard/CreatUser';
import UserDetailScreen from '../Screens/Dashboard/UserDetail';
import Store from '../Screens/Dashboard/Store';
import BookingScreen from '../Screens/Dashboard/Booking';
import ReviewScreen from '../Screens/Dashboard/Review';
import CouponScreen from '../Screens/Dashboard/Coupon';
import PaymentScreen from '../Screens/Dashboard/Payment';
import DeliveryScreen from '../Screens/Dashboard/Delivery';
import SpotsScreen from '../Screens/Dashboard/Spots';

export default function Paths() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<DashboardScreen />} />
				<Route path='/account/login' element={<LoginScreen />} />
				<Route path='/account/reset' element={<ForgotpasswordScreen />} />
				<Route path='/account/users' element={<UsersScreeen />} />
				<Route path='/user/create' element={<CreatUserScreen />} />
				<Route path='/user/details' element={<UserDetailScreen />} />
				<Route path='/user/store' element={<Store />} />
				<Route path='/user/review' element={<ReviewScreen />} />
				<Route path='/user/booking' element={<BookingScreen />} />
				<Route path='/user/coupon' element={<CouponScreen />} />
				<Route path='/user/delivery' element={<DeliveryScreen />} />
				<Route path='/user/payment' element={<PaymentScreen />} />
				<Route path='/spots' element={<SpotsScreen />} />
			</Routes>
		</Router>
	);
}
