import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import PasswordField from '../../PasswordField';
import { useFormik } from 'formik';
import { useAuth } from 'reactfire';
import { signInWithEmailAndPassword } from 'firebase/auth';
import validationSchema from './validationSchema';
import { LoadingButton } from '@mui/lab';
import { UIContext } from '../../../Unknown/UIContext';

const LoginForm: React.FC = () => {
	const { setAlert } = useContext(UIContext);
	const auth = useAuth();
	const formik = useFormik({
		initialValues: {
			email: 'deurlex@gmail.com',
			password: '260696vlad',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			const { email, password } = values;
			signInWithEmailAndPassword(auth, email, password).catch((error) => {
				formik.setSubmitting(false);
				setAlert({
					severity: 'error',
					show: true,
					icon: false,
					message: error.message || 'Some error',
				});
			});
		},
	});
	// const singIn = ({ email, password }: SignInAttr) => {
	// 	signInWithEmailAndPassword(auth, email, password).catch((error) => {
	// 		formik.setSubmitting(true);
	// 		setAlert({
	// 			show: true,
	// 			icon: false,
	// 			message: error.message || 'Some error',
	// 		});
	// 	});
	// };
	return (
		<form onSubmit={formik.handleSubmit}>
			<TextField
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
				onChange={formik.handleChange}
				value={formik.values.email}
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
			/>
			<PasswordField
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
				onChange={formik.handleChange}
				value={formik.values.password}
				error={
					formik.touched.password && Boolean(formik.errors.password)
				}
				helperText={formik.touched.password && formik.errors.password}
			/>
			<LoadingButton
				type="submit"
				fullWidth
				disabled={formik.isSubmitting}
				loading={formik.isSubmitting}
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
			>
				Sign In
			</LoadingButton>
		</form>
	);
};

export default LoginForm;
