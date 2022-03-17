import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, child, get, onValue, push } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBiVBX2NUx0OlUz9AMhB_W8NQ0R70wQ-xQ",
  authDomain: "chatsocialteste.firebaseapp.com",
  databaseURL: "https://chatsocialteste-default-rtdb.firebaseio.com",
  projectId: "chatsocialteste",
  storageBucket: "chatsocialteste.appspot.com",
  messagingSenderId: "298779586512",
  appId: "1:298779586512:web:0585d26f14dc98102893d5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

export { auth, database, ref, get, set, child, onValue, push };
