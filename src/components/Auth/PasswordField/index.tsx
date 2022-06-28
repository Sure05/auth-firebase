import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { TextFieldProps } from '@mui/material/TextField/TextField';

const PasswordField: React.FC<TextFieldProps> = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<TextField
			{...props}
			type={showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};

export default PasswordField;
