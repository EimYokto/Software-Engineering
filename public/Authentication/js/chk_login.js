firebase.auth().onAuthStateChanged(user =>{
    if(user) { // user is not null = Logged In
        //console.log(user);
        document.getElementById('body').style.display = "block";
        document.getElementById('top').innerHTML = user.displayName 
            + "<img style='width: 30px' src='" + user.photoURL + "'>";
    } else { // user is null = Not Logged In
        window.location="login.html";
    }
});
