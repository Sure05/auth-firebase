import React from 'react';
import { TextField } from '@mui/material';
import PasswordField from '../../PasswordField';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuth } from 'reactfire';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import { LoadingButton } from '@mui/lab';

interface SignUpAttr {
	email: string;
	displayName: string;
	password: string;
	passwordRepeater: string;
}

const RegisterForm: React.FC = () => {
	const auth = useAuth();
	const singUp = async ({ email, displayName, password }: SignUpAttr) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const user = userCredential.user;
				await updateProfile(user, {
					displayName: displayName,
				});
				// await auth.signOut();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log({
					errorCode,
					errorMessage,
				});
			});
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			displayName: '',
			password: '',
			passwordRepeater: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => singUp(values),
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<TextField
				margin="normal"
				// required
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
			<TextField
				margin="normal"
				// required
				fullWidth
				id="name"
				label="Full name"
				name="displayName"
				autoComplete="displayName"
				onChange={formik.handleChange}
				value={formik.values.displayName}
				error={
					formik.touched.displayName &&
					Boolean(formik.errors.displayName)
				}
				helperText={
					formik.touched.displayName && formik.errors.displayName
				}
			/>
			<PasswordField
				margin="normal"
				// required
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
			<PasswordField
				margin="normal"
				// required
				fullWidth
				name="passwordRepeater"
				label="Repeat password"
				type="password"
				id="password-repeater"
				autoComplete="password-repeater"
				onChange={formik.handleChange}
				value={formik.values.passwordRepeater}
				error={
					formik.touched.passwordRepeater &&
					Boolean(formik.errors.passwordRepeater)
				}
				helperText={
					formik.touched.passwordRepeater &&
					formik.errors.passwordRepeater
				}
			/>
			<LoadingButton
				type="submit"
				fullWidth
				variant="contained"
				disabled={formik.isSubmitting}
				loading={formik.isSubmitting}
				sx={{ mt: 3, mb: 2 }}
			>
				Sign In
			</LoadingButton>
		</form>
	);
};

export default RegisterForm;
