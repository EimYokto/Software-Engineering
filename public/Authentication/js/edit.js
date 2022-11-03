//---Bussiness---//
const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('ID');

// db.ref(TABLE + "/" + ID).once('value')
db.ref(TABLE).child(ID).once('value')
.then((snapshot) => {
  var result = snapshot.val();
  document.getElementById("ID").value = result.ID;
  document.getElementById("Name").value = result.Name;
  document.getElementById("Type").value = result.Type;
  document.getElementById("System").value = result.System;
  document.getElementById("Application").value = result.Application;
  document.getElementById("Version").value = result.Version;
  document.getElementById("Detail").value = result.Detail;
  document.getElementById("responsible").value = result.responsible;

}).catch( (err) => {
  alert(err.message);
});

function edit() {
    const ID = document.getElementById('ID').value;
    const Name = document.getElementById('Name').value;
    const Type = document.getElementById('Type').value;
    const System = document.getElementById('System').value;
    const Application = document.getElementById('Application').value;
    const Version = document.getElementById('Version').value;
    const Detail = document.getElementById('Detail').value;
    const responsible = document.getElementById('responsible').value;

    db.ref(TABLE).push({"ID":ID,"Name":Name,"Type":Type,"System":System,"Application":Application,"Version":Version,"Detail":Detail,"responsible":responsible})    
    .then(() => {
        alert("Edit data successfully");
      window.location = "../home.html";
    })
    .catch(error => {
        alert(error.message);
    });
}





//--App---//

db.ref(App).child(ID).once('value')
.then((snapshot) => {
  var result = snapshot.val();
  document.getElementById("ID").value = ID;
  document.getElementById("Name").value = result.Name;
  document.getElementById("Language").value = result.Language;
  document.getElementById("Data").value = result.Data;
  document.getElementById("Year").value = result.Year;
  document.getElementById("Bussiness").value = result.Bussiness;
  document.getElementById("System").value = result.System;
  document.getElementById("Detail").value = result.Detail;
  document.getElementById("Version").value = result.Version;
  document.getElementById("responsible").value = result.responsible;
}).catch( (err) => {
  alert(err.message);
});

function edit1() {
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


         
    db.ref(App + "/" + id).update({"ID":ID, "Name":Name, "Language":Language, "Data":Data, "Year":Year, 
    "Bussiness":Bussiness, "System":System, "Detail":Detail, "Version":Version,"responsible":responsible})
    .then(() => {
      alert("Edit data successfully");
      window.location = "../Application.html";
    })
    .catch(error => {
        alert(error.message);
    });
}



