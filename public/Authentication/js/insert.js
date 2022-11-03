function insertTable() {
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Type = document.getElementById('Type').value;
    const System = document.getElementById('System').value;
    const Application = document.getElementById('Application').value;
    const Version = document.getElementById('Version').value;
    const Detail = document.getElementById('Detail').value;
    const responsible = document.getElementById('responsible').value;

    db.ref(TABLE).push({"ID":ID,"Name":Name,"Type":Type,"System":System,"Application":Application,"Version":Version,"Detail":Detail,"responsible":responsible})
    .then(function xxx(){
        window.alert("Success");
        window.history.back();
    })
    .catch(function(err){
        window.alert(err.message);
        window.location = "../Authentication/Bussiness.html"
    });

    

}
function insertApp() {
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Language = document.getElementById('Language').value;
    const Data = document.getElementById('Data').value;
    const Year = document.getElementById('Year').value;
    const Bussiness = document.getElementById('Bussiness').value;
    const System = document.getElementById('System').value;
    const Detail = document.getElementById('Detail').value;
    const Version = document.getElementById('Version').value;
    const responsible = document.getElementById('responsible').value;

    db.ref(App).push({"ID":ID,"Name":Name,"Language":Language,"Data":Data,"Year":Year,"Bussiness":Bussiness,"System":System,"Detail":Detail,"Version":Version,"responsible":responsible})
    .then(function xxx(){
        window.alert("Success");
        window.location = "../Authentication/Application.html";
    })
    .catch(function(err){
        window.alert(err.message);
    });

    

}

function insertData() {
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

    db.ref(Data).push({"ID":ID,"Name":Name,"Datatype":Datatype,"Style":Style,"Bussiness":Bussiness,"Application":Application,"System":System,"Detail":Detail,"Version":Version,"responsible":responsible})
    .then(function xxx(){
        window.alert("Success");
        window.location = "../Authentication/data.html";
    })
    .catch(function(err){
        window.alert(err.message);
    });

}

function insertTech() {
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Brand = document.getElementById('Brand').value;
    const Model = document.getElementById('Model').value;
    const Spec = document.getElementById('Spec').value;
    const Quantity = document.getElementById('Quantity').value;
    const Operating_system = document.getElementById('Operating_system').value;
    const Memory = document.getElementById('Memory').value;
    const Storage = document.getElementById('Storage').value;
    const Application = document.getElementById('Application').value;
    const Location = document.getElementById('Location').value;
    const Detail = document.getElementById('Detail').value;
    const Type = document.getElementById('Type').value;

    db.ref(Tech).push({"ID":ID,"Name":Name,"Brand":Brand,"Model":Model,"Spec":Spec,"Quantity":Quantity,"Operating_system":Operating_system,"Memory":Memory,"Storage":Storage,"Application":Application,"Location":Location,"Detail":Detail,"Type":Type})
    .then(function xxx(){
        window.alert("Success");
        window.location = "../Authentication/Technology.html";
    })
    .catch(function(err){
        window.alert(err.message);
    });

}