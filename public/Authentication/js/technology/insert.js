function insert() {
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Brand = document.getElementById('Datatype').value;
    const Model = document.getElementById('Style').value;
    const Spec = document.getElementById('Bussiness').value;
    const Quanlity = document.getElementById('Application').value;
    const Operating_system = document.getElementById('System').value;
    const Memory = document.getElementById('Detail').value;
    const Storage = document.getElementById('Version').value;
    const Application = document.getElementById('responsible').value;
    const Location = document.getElementById('responsible').value;
    const Detail = document.getElementById('responsible').value;
    const Type = document.getElementById('responsible').value;

    db.ref(TABLE).push({"ID":ID,"Name":Name,"Brand":Brand,"Model":Model,"Spec":Spec,"Quanlity":Quanlity,"Operating_system":Operating_system,"Memory":Memory,"Storage":Storage,
    "Application":Application,"Location":Location,"Detail":Detail,"Type":Type})
    .then(function xxx(){
        window.alert("Success");
        window.location = "/Authentication/technology.html";
    })
    .catch(function(err){
        window.alert(err.message);
    });
}