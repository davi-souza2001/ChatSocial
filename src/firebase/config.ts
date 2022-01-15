import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAqsxNkZfMry94VihiFPxav5QYmyrb8Vhw",
  authDomain: "chatsocial-2001.firebaseapp.com",
  projectId: "chatsocial-2001",
  storageBucket: "chatsocial-2001.appspot.com",
  messagingSenderId: "720248367338",
  appId: "1:720248367338:web:4afb0035b524f951ab8f93"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export {auth}