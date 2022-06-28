import { Box, Grid, Link as MaterialLink, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginScreen: React.FC = () => {
	return (
		<Box
			sx={{
				my: 8,
				mx: 4,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Typography component="h1" variant="h5">
				Sign in
			</Typography>
			<Box sx={{ mt: 1 }}>
				<LoginForm />
				<Grid container>
					<Grid item xs>
						<MaterialLink href="#" variant="body2">
							Forgot password?
						</MaterialLink>
					</Grid>
					<Grid item>
						<Link to="/register">
							<MaterialLink variant="body2">
								{"Don't have an account? Sign Up"}
							</MaterialLink>
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default LoginScreen;
