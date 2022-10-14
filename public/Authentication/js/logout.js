function logout() {
    firebase.auth().signOut()
    .then(() => {
        //alert("You have been logged out!!!");
        window.location="login.html";
    })
    .catch(err=> {
        alert(err.message);
    });
}
