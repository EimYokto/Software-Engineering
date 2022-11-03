db.ref(TABLE).on("value",function(snapshot){
    var result = snapshot.val();
    var trdata = "";

    for(key in result) {
        rec = result[key];
        trdata += "<tr>";
        trdata += "<td>"+ rec.ID + "</td>";
        trdata += "<td>"+ rec.Name + "</td>";
        trdata += "<td>"+ rec.Type + "</td>";
        trdata += "<td>"+ rec.System + "</td>";
        trdata += "<td>"+ rec.Application + "</td>";
        trdata += "<td>"+ rec.Version + "</td>";
        trdata += "<td>"+ rec.Detail + "</td>";
        trdata += "<td>"+ rec.responsible + "</td>";
        trdata += "<td>";
        trdata += "<a class='btn-sm btn-info' href='../edit Buss.html?ID=" + key + "'>Edit</a>";
        trdata += "</td>";
        trdata += "</tr>";
    }
    document.getElementById('tdata').innerHTML = trdata;

},function(err){
    window.alert(err.message);
});

db.ref(App).on("value",function(snapshot){
    var result = snapshot.val();
    var trdata1 = "";

    for(key in result) {
        rec = result[key];
        trdata1 += "<tr>";
        trdata1 += "<td>" + rec.ID + "</td>";
        trdata1 += "<td>" + rec.Name + "</td>";
        trdata1 += "<td>" + rec.Language + "</td>";
        trdata1 += "<td>" + rec.Data + "</td>";
        trdata1 += "<td>" + rec.Year + "</td>";
        trdata1 += "<td>" + rec.Bussiness + "</td>";
        trdata1 += "<td>" + rec.System + "</td>";
        trdata1 += "<td>" + rec.Detail + "</td>";
        trdata1 += "<td>" + rec.Version + "</td>";
        trdata1 += "<td>" + rec.responsible + "</td>";
        trdata1 += "<td>";
        trdata1 += "<a class='btn-sm btn-info' href='edit App.html?id=" + key + "'>Edit</a>";
        trdata1 += "</td>";
        trdata1 += "</tr>";
    }
    document.getElementById('tdata1').innerHTML = trdata1;

},function(err){
    window.alert(err.message);
});


db.ref(Data).on("value",function(snapshot){
    var result = snapshot.val();
    var trdata2 = "";

    for(key in result) {
        rec = result[key];
        trdata2 += "<tr>";
        trdata2 += "<td>" + rec.ID + "</td>";
        trdata2 += "<td>" + rec.Name + "</td>";
        trdata2 += "<td>" + rec.Datatype + "</td>";
        trdata2 += "<td>" + rec.Style + "</td>";
        trdata2 += "<td>" + rec.Bussiness + "</td>";
        trdata2 += "<td>" + rec.Application + "</td>";
        trdata2 += "<td>" + rec.System + "</td>";
        trdata2 += "<td>" + rec.Detail + "</td>";
        trdata2 += "<td>" + rec.Version + "</td>";
        trdata2 += "<td>" + rec.responsible + "</td>";
        trdata2 += "<td>";
        trdata2 += "<a class='btn-sm btn-info' href='edit Data.html?id=" + key + "'>Edit</a>";
        trdata2 += "</td>";
        trdata2 += "</tr>";
    }
    document.getElementById('tdata2').innerHTML = trdata2;

},function(err){
    window.alert(err.message);
});

db.ref(Tech).on("value",function(snapshot){
    var result = snapshot.val();
    var trdata3 = "";

    for(key in result) {
        rec = result[key];
        trdata3 += "<tr>";
        trdata3 += "<td>" + rec.ID + "</td>";
        trdata3 += "<td>" + rec.Name + "</td>";
        trdata3 += "<td>" + rec.Brand + "</td>";
        trdata3 += "<td>" + rec.Model + "</td>";
        trdata3 += "<td>" + rec.Spec + "</td>";
        trdata3 += "<td>" + rec.Quantity + "</td>";
        trdata3 += "<td>" + rec.Operating_system + "</td>";
        trdata3 += "<td>" + rec.Memory + "</td>";
        trdata3 += "<td>" + rec.Storage + "</td>";
        trdata3 += "<td>" + rec.Application + "</td>";
        trdata3 += "<td>" + rec.Location + "</td>";
        trdata3 += "<td>" + rec.Detail + "</td>";
        trdata3 += "<td>" + rec.Type + "</td>";
        trdata3 += "<td>";
        trdata3 += "<a class='btn-sm btn-info' href='edit Tech.html?id=" + key + "'>Edit</a>";
        trdata3 += "</td>";
        trdata3 += "</tr>";
    }
    document.getElementById('tdata3').innerHTML = trdata3;

},function(err){
    window.alert(err.message);
});