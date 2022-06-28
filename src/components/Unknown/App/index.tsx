import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';
import { UIContextProvider } from '../UIContext';
import theme from '../../../common/theme';
import Root from '../Root';
import React from 'react';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const App: React.FC = () => {
	const app = useFirebaseApp();
	const firestoreInstance = getFirestore(app);
	const authInstance = getAuth(app);
	return (
		<AuthProvider sdk={authInstance}>
			<FirestoreProvider sdk={firestoreInstance}>
				<ThemeProvider theme={theme}>
					<BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
						<CssBaseline />
						<UIContextProvider>
							<Root />
						</UIContextProvider>
					</BrowserRouter>
				</ThemeProvider>
			</FirestoreProvider>
		</AuthProvider>
	);
};

export default App;
