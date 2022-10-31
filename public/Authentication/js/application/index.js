db.ref(TABLE).on("value",function(snapshot){
    var result = snapshot.val();
    var trdata = "";

    for(key in result) {
        rec = result[key];
        trdata += "<tr>";
        trdata += "<td>" + rec.ID + "</td>";
        trdata += "<td>" + rec.Name + "</td>";
        trdata += "<td>" + rec.Language + "</td>";
        trdata += "<td>" + rec.Data + "</td>";
        trdata += "<td>" + rec.Year + "</td>";
        trdata += "<td>" + rec.Bussiness + "</td>";
        trdata += "<td>" + rec.System + "</td>";
        trdata += "<td>" + rec.Detail + "</td>";
       //  trdata += "<td>";
       //  trdata += "<a class='btn-sm btn-info' href='edit.html?id=" + key + "'>Edit</a>";
       //  trdata += "</td>";
        trdata += "</tr>";
    }
    document.getElementById('tdata').innerHTML = trdata;

},function(err){
    window.alert(err.message);
});
