import React, { createContext, PropsWithChildren, useState } from 'react';
// import MuiAlert, {AlertColor} from '@mui/lab/Alert';
import { Snackbar, SnackbarOrigin, AlertColor, Alert } from '@mui/material';

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

interface UIContextProps {
	setAlert: React.Dispatch<React.SetStateAction<AlertProps>>;
}

interface AlertProps {
	show: boolean;
	icon?: boolean;
	severity?: AlertColor;
	message?: string;
	position?: SnackbarOrigin;
}

export const UIContextProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [alert, setAlert] = useState<AlertProps>({
		show: false,
		icon: true,
		severity: 'info',
		message: '',
		position: {
			vertical: 'bottom',
			horizontal: 'left',
		},
	});
	const handleClose = () =>
		setAlert({
			show: false,
		});

	return (
		<UIContext.Provider value={{ setAlert }}>
			{children}
			<Snackbar
				open={alert.show}
				anchorOrigin={alert.position}
				autoHideDuration={4000}
				onClose={handleClose}
			>
				<Alert elevation={6} variant="filled" severity={alert.severity}>
					{alert.message}
				</Alert>
			</Snackbar>
		</UIContext.Provider>
	);
};
