function insert() {
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Type = document.getElementById('Type').value;
    const System = document.getElementById('System').value;
    const Application = document.getElementById('Application').value;
    const Version = document.getElementById('Version').value;
    const Detail = document.getElementById('Detail').value;
    const responsible = document.getElementById('responsible').value;

    db.ref(TABLE).push({"ID":ID,"Name":Name,"Type":Type,"System":System,"Data":Data,"Year":Year,"Bussiness":Bussiness,"Application":Application,"Version":Version,"Detail":Detail,"responsible":responsible})
    .then(function xxx(){
        window.alert("Success");
        window.location = "/Authentication/allwork.html";
    })
    .catch(function(err){
        window.alert(err.message);
    });
}