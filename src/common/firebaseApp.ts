// import 'firebase/firestore';
// import 'firebase/functions';
// import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);

export default app;
