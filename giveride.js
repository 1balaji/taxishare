var header="<table class='table'><tr><th>Date</th><th>From</th><th>To</th></tr>";
var content="";
var footer="</table>";
$(document).ready(function() {
    $("#rides").html(header+content+footer);
    $("#add").click(function() {
        var date=$("#date").val();
        var from=$("#timestart").val();
        var to=$("#timeend").val();
        content=content+"<tr><td>"+date+"</td><td>"+from+"</td><td>"+to+"</td></tr>";
        $("#rides").html(header+content+footer);
    });
});
