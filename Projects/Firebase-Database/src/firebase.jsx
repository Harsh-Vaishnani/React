import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkt318zPoC12Xb5nNPBtVOiqMkchI1SQ0",
  authDomain: "fir-database-7a832.firebaseapp.com",
  projectId: "fir-database-7a832",
  storageBucket: "fir-database-7a832.appspot.com",
  messagingSenderId: "433699513601",
  appId: "1:433699513601:web:f043e08f7eafecd408a700",
  databaseURL: "https://fir-database-7a832-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

export default app;
