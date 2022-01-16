import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, set, child } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyAqsxNkZfMry94VihiFPxav5QYmyrb8Vhw",
  authDomain: "chatsocial-2001.firebaseapp.com",
  projectId: "chatsocial-2001",
  storageBucket: "chatsocial-2001.appspot.com",
  messagingSenderId: "720248367338",
  appId: "1:720248367338:web:4afb0035b524f951ab8f93",
  databaseURL: 'https://chatsocial-2001-default-rtdb.firebaseio.com/'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const database = getDatabase()

export {auth, database, ref, set, child}