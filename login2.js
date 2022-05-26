import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBnu17f5mX_6dz--_zt9rxADJPs7PWtNEU",
    authDomain: "test-6d1ed.firebaseapp.com",
    databaseURL: "https://test-6d1ed-default-rtdb.firebaseio.com",
    projectId: "test-6d1ed",
    storageBucket: "test-6d1ed.appspot.com",
    messagingSenderId: "209770075695",
    appId: "1:209770075695:web:f2dcdc7de38bc19a1018da",
 };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


  document.getElementById("signup").addEventListener('click', function(){
   const Email= document.getElementById("email").value;
   const Password =document.getElementById("password").value;
   window.open('http://127.0.0.1:5500/home.html', '_blank');    

    
   signInWithEmailAndPassword(auth, Email, Password)
  
   .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("loginbox").style.display="none";
    document.getElementById("arrowbox").style.display="none";
    document.getElementById("result").innerHTML="welcome back";

    })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('get the fuxx out')

  });
  
});


