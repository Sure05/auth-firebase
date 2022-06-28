import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useAuth, useUser } from 'reactfire';
import clearFirestoreCache from '../../common/clearFirestoreCache';

const HomeScreen: React.FC = () => {
	const auth = useAuth();
	const { data: user } = useUser();
	const signOut = async () => {
		clearFirestoreCache();
		await auth.signOut();
	};
	return (
		<Box
			sx={{
				p: 1.5,
			}}
		>
			<Typography component="h1" variant="h5">
				Home screen
			</Typography>
			{user && <pre>{JSON.stringify(user, null, 2)}</pre>}
			<Button variant="contained" onClick={signOut}>
				Sign Out
			</Button>
		</Box>
	);
};
export default HomeScreen;
