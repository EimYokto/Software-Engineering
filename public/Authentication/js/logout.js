function logout() {
    firebase.auth().signOut()
    .then(() => {
        //alert("You have been logged out!!!");
        window.location="../";
    })
    .catch(err=> {
        alert(err.message);
    });
}
