import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxhzcka7WaNi3ggkutQqDW4TpC_gcUdbg",
  authDomain: "mybook-app-b771c.firebaseapp.com",
  projectId: "mybook-app-b771c",
  storageBucket: "mybook-app-b771c.appspot.com",
  messagingSenderId: "407267052990",
  appId: "1:407267052990:web:69b96cde9eb7342b19bdef",
  databaseURL: "https://mybook-app-b771c-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
