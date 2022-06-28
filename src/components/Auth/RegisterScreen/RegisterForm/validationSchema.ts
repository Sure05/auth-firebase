import * as yup from 'yup';

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	displayName: yup.string().required('Email is required'),
	password: yup.string().required('Password is required'),
	passwordRepeater: yup
		.string()
		.when('password', {
			is: (val: string) => val && val.length > 0,
			then: yup
				.string()
				.oneOf(
					[yup.ref('password')],
					'Both password need to be the same',
				),
		})
		.required('Password is required'),
});

export default validationSchema;
