function SignUp() {
    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPass').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
       var user = firebase.auth().currentUser;
       user.sendEmailVerification().then(function() {
          alert("A verification email has been sent to you already!");
       }).catch(function(error) {
          alert(error.message);
       });
    })
    .catch((error) => {
       alert(error.code + ": " + error.message);
    });
 }


 function SignIn() {
    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPass').value;

    firebase.auth().signInWithEmailAndPassword(email,password)
.then(function() {
        window.location = "home.html";
    })
    .catch(function(error) {
        alert("พิม Email or Password ผิด");
    }); 



}
function SignOut() {
   firebase.auth().signOut()
.then(() => {
       window.location = "login.html";
     })
.catch((error) => {
       alert(error.code + ": " + error.message);
   });
}



 