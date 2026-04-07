
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBfN1-OQUQgQTu358UO6aZ-BDIbjWZq1Mc",
    authDomain: "kuryeprov44.firebaseapp.com",
    databaseURL: "https://kuryeprov44-default-rtdb.firebaseio.com",
    projectId: "kuryeprov44"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function checkUsers() {
    console.log("Checking users_v45...");
    try {
        const snapshot = await get(ref(db, "users_v45"));
        if (snapshot.exists()) {
             const users = snapshot.val();
             console.log("Found users:", Object.keys(users).length);
             for(let uid in users) {
                 console.log(`- ${users[uid].email} (UID: ${uid}, Role: ${users[uid].role})`);
             }
        } else {
            console.log("No users found in users_v45.");
        }
    } catch (e) {
        console.error("Error fetching users_v45:", e.message);
    }
    
    console.log("Checking users (old)...");
    try {
        const snapshot = await get(ref(db, "users"));
        if (snapshot.exists()) {
             const users = snapshot.val();
             console.log("Found users:", Object.keys(users).length);
             for(let uid in users) {
                 console.log(`- ${users[uid].email} (UID: ${uid}, Role: ${users[uid].role})`);
             }
        }
    } catch (e) {
        console.error("Error fetching users:", e.message);
    }
    
    process.exit();
}

checkUsers();
