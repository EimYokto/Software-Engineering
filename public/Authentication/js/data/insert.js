function insert() {
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Datatype = document.getElementById('Datatype').value;
    const Style = document.getElementById('Style').value;
    const Bussiness = document.getElementById('Bussiness').value;  
    const Application = document.getElementById('Application').value;
    const System = document.getElementById('System').value;
    const Detail = document.getElementById('Detail').value;
    const Version = document.getElementById('Version').value;
    const responsible = document.getElementById('responsible').value;


    db.ref(TABLE).push({"ID":ID,"Name":Name,"Datatype":Datatype,"Style":Style,"Bussiness":Bussiness,"Application":Application,"System":System,"Detail":Detail,"Version":Version,"responsible":responsible})
    .then(function xxx(){
        window.alert("Success");
        window.location = "/Authentication/data.html";
    })
    .catch(function(err){
        window.alert(err.message);
    });
}