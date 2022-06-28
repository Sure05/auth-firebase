import React from 'react';
import { Box, Grid, Link as MaterialLink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';

const RegisterScreen: React.FC = () => {
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
				Sign up
			</Typography>
			<Box sx={{ mt: 1 }}>
				<RegisterForm />
				<Grid container>
					<Grid item>
						<Link to="/login">
							<MaterialLink variant="body2">
								{'Already have an account? Sign in'}
							</MaterialLink>
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default RegisterScreen;
