import { Navigate, Route, Routes } from 'react-router-dom';
import HomeScreen from '../../HomeScreen';
import React, { useEffect, useState } from 'react';
import { useUser } from 'reactfire';
import NotFoundScreen from '../../NotFoundScreen';
import LoginScreen from '../../Auth/LoginScreen';
import Auth from '../../Auth';
import RegisterScreen from '../../Auth/RegisterScreen';

const Root: React.FC = () => {
	const { data: user, firstValuePromise } = useUser();
	const [isUserLoaded, setIsUserLoaded] = useState(false);
	const isLogged = !!user;
	useEffect(() => {
		firstValuePromise.then(() => setIsUserLoaded(true));
	}, [firstValuePromise, setIsUserLoaded]);
	console.log(isUserLoaded, isLogged, user);
	if (!isUserLoaded) return null;
	if (user)
		return (
			<Routes>
				<Route path="/">
					<Route index element={<HomeScreen />} />
					<Route path="login" element={<Navigate to="/" replace />} />
					<Route
						path="register"
						element={<Navigate to="/" replace />}
					/>
					<Route path="*" element={<NotFoundScreen />} />
				</Route>
			</Routes>
		);

	return (
		<Routes>
			<Route path="/" element={<Auth />}>
				<Route index element={<Navigate to="/login" replace />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<RegisterScreen />} />
				<Route path="*" element={<NotFoundScreen />} />
			</Route>
		</Routes>
	);
};

export default Root;
