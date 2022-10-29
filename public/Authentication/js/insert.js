function insert() {
    const ID = document.getElementById('ID').value;
    const name_B = document.getElementById('name_B').value;
    const name_D = document.getElementById('name_D').value;
    const name_S = document.getElementById('name_S').value;
    const name_Ad = document.getElementById('name_Ad').value;

    db.ref(TABLE).push({"ID":ID,"name_B":name_B,"name_D":name_D,"name_S":name_S,"name_Ad":name_Ad})
    .then(function xxx(){
        window.alert("Success");
        window.location = "/";
    })
    .catch(function(err){
        window.alert(err.message);
    });
}