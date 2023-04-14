import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3kd2JL8dowyKEL5AMBAHg_wetSiRlD3Y",
  authDomain: "rawat-chat-app.firebaseapp.com",
  projectId: "rawat-chat-app",
  storageBucket: "rawat-chat-app.appspot.com",
  messagingSenderId: "928500811811",
  appId: "1:928500811811:web:6135a729a4c3bbbff90996"
};

export const app = initializeApp(firebaseConfig);