var tableData = document.getElementById("octable").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
var totalRows = tableData.length - 1;
var diffRow = 0;
alert(totalRows);
for(var i=0;i<totalRows;i++){
    if(tableData[i].getElementsByTagName("td")[1].className != "ylwbg"){
        diffRow = i;
        break;
    }
}
var startRow = diffRow - 7;
var endRow = diffRow + 7;
var row,callsOI,putsOI;
for(var i=startRow;i<endRow;i++){
    row = tableData[i].getElementsByTagName("td");
    callsOI = parseInt(row[1].innerText.replace(/,/g, ""));
    putsOI = parseInt(row[row.length - 2].innerText.replace(/,/g, ""));
    alert(tableData[i].getElementsByClassName("grybg")[0].innerText+", "+putsOI/callsOI);
}
