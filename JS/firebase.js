// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import { getFirestore ,getDocs ,collection } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAB6MPsSBZMNHAUctHtPGuTjekxX0ZtCaM",
authDomain: "media-bbcd9.firebaseapp.com",
projectId: "media-bbcd9",
storageBucket: "media-bbcd9.appspot.com",
messagingSenderId: "704698318622",
appId: "1:704698318622:web:610cec0df06af0d8c0d30f",
measurementId: "G-GY4ZZB10MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db  = getFirestore(app);
console.log("loading");
console.log(await getProduct(db));
// Get a list of cities from your database
async function getProduct(db) {
const citiesCol = collection(db, 'meals');
const citySnapshot = await getDocs(citiesCol);
const cityList = citySnapshot.docs[1].data();


const list=Object.values(cityList);
list.forEach(ele=>{
console.log(ele)
})
return cityList;
}