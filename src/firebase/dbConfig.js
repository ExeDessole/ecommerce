import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCcZtXcvpa7PblIsUf_zRUfjygZ6OjmOQ",
  authDomain: "tienda-verde-boreal.firebaseapp.com",
  projectId: "tienda-verde-boreal",
  storageBucket: "tienda-verde-boreal.appspot.com",
  messagingSenderId: "55005662121",
  appId: "1:55005662121:web:fffa13ba2966ce2cbd12b8"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp= ()=>{
    return app
}