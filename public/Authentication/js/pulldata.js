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

db.ref(TABLE).on("value",function(snapshot){
    var result = snapshot.val();
    var trdata01 = "";

    for(key in result) {
        rec = result[key];
        trdata01 += "<tr>";
        trdata01 += "<td>"+ rec.ID + "</td>";
        trdata01 += "<td>"+ rec.Name + "</td>";
        trdata01 += "<td>"+ rec.Type + "</td>";
        trdata01 += "<td>"+ rec.System + "</td>";
        trdata01 += "<td>"+ rec.Application + "</td>";
        trdata01 += "<td>"+ rec.Version + "</td>";
        trdata01 += "<td>"+ rec.Detail + "</td>";
        trdata01 += "<td>"+ rec.responsible + "</td>";
        trdata01 += "<td>";
        trdata01 += "<a class='btn-sm btn-info'  href='../viwe.html?ID=" + key + "'>View</a>";
        trdata01 += "</td>";
        trdata01 += "</tr>";
    }
    document.getElementById('tdata01').innerHTML = trdata01;

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
        trdata1 += "<a class='btn-sm btn-info' href='../edit App2.html?id=" + key + "'>Edit</a>";
        trdata1 += "</td>";
        trdata1 += "</tr>";
    }
    document.getElementById('tdata1').innerHTML = trdata1;

},function(err){
    window.alert(err.message);
});

db.ref(App).on("value",function(snapshot){
    var result = snapshot.val();
    var trdata02 = "";

    for(key in result) {
        rec = result[key];
        trdata02 += "<tr>";
        trdata02 += "<td>" + rec.ID + "</td>";
        trdata02 += "<td>" + rec.Name + "</td>";
        trdata02 += "<td>" + rec.Language + "</td>";
        trdata02 += "<td>" + rec.Data + "</td>";
        trdata02 += "<td>" + rec.Year + "</td>";
        trdata02 += "<td>" + rec.Bussiness + "</td>";
        trdata02 += "<td>" + rec.System + "</td>";
        trdata02 += "<td>" + rec.Detail + "</td>";
        trdata02 += "<td>" + rec.Version + "</td>";
        trdata02 += "<td>" + rec.responsible + "</td>";
        trdata02 += "<td>";
        trdata02 += "<a class='btn-sm btn-info'  href='../viwe2.html?ID=" + key + "'>View</a>";
        trdata02 += "</td>";
        trdata02 += "</tr>";
    }
    document.getElementById('tdata02').innerHTML = trdata02;

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

db.ref(Data).on("value",function(snapshot){
    var result = snapshot.val();
    var trdata03 = "";

    for(key in result) {
        rec = result[key];
        trdata03 += "<tr>";
        trdata03 += "<td>" + rec.ID + "</td>";
        trdata03 += "<td>" + rec.Name + "</td>";
        trdata03 += "<td>" + rec.Datatype + "</td>";
        trdata03 += "<td>" + rec.Style + "</td>";
        trdata03 += "<td>" + rec.Bussiness + "</td>";
        trdata03 += "<td>" + rec.Application + "</td>";
        trdata03 += "<td>" + rec.System + "</td>";
        trdata03 += "<td>" + rec.Detail + "</td>";
        trdata03 += "<td>" + rec.Version + "</td>";
        trdata03 += "<td>" + rec.responsible + "</td>";
        trdata03 += "<td>";
        trdata03 += "<a class='btn-sm btn-info'  href='../viwe.html?ID=" + key + "'>View</a>";
        trdata03 += "</td>";
        trdata03 += "</tr>";
    }
    document.getElementById('tdata03').innerHTML = trdata03;

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

db.ref(Tech).on("value",function(snapshot){
    var result = snapshot.val();
    var trdata04 = "";

    for(key in result) {
        rec = result[key];
        trdata04 += "<tr>";
        trdata04 += "<td>" + rec.ID + "</td>";
        trdata04 += "<td>" + rec.Name + "</td>";
        trdata04 += "<td>" + rec.Brand + "</td>";
        trdata04 += "<td>" + rec.Model + "</td>";
        trdata04 += "<td>" + rec.Spec + "</td>";
        trdata04 += "<td>" + rec.Quantity + "</td>";
        trdata04 += "<td>" + rec.Operating_system + "</td>";
        trdata04 += "<td>" + rec.Memory + "</td>";
        trdata04 += "<td>" + rec.Storage + "</td>";
        trdata04 += "<td>" + rec.Application + "</td>";
        trdata04 += "<td>" + rec.Location + "</td>";
        trdata04 += "<td>" + rec.Detail + "</td>";
        trdata04 += "<td>" + rec.Type + "</td>";
        trdata04 += "<td>";
        trdata04 += "<a class='btn-sm btn-info'  href='../viwe.html?ID=" + key + "'>View</a>";
        trdata04 += "</td>";
        trdata04 += "</tr>";
    }
    document.getElementById('tdata04').innerHTML = trdata04;

},function(err){
    window.alert(err.message);
});