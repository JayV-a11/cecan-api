import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

let app;
export const initializeFirebaseApp = () => {
  try {
    app = initializeApp(firebaseConfig);
    return app;
  } catch (erro) {
    console.log(erro);
  }
};

export const getFirebaseApp = () => app;