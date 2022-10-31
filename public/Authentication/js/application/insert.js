function insert() {
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Language = document.getElementById('Language').value;
    const Data = document.getElementById('Data').value;
    const Year = document.getElementById('Year').value;
    const Bussiness = document.getElementById('Bussiness').value;
    const System = document.getElementById('System').value;
    const Detail = document.getElementById('Detail').value;

    db.ref(TABLE).push({"ID":ID,"Name":Name,"Language":Language,"Data":Data,"Year":Year,"Bussiness":Bussiness,"System":System,"Detail":Detail})
    .then(function xxx(){
        window.alert("Success");
        window.location = "/Authentication/Application.html";
    })
    .catch(function(err){
        window.alert(err.message);
    });
}