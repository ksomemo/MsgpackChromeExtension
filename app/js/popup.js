$(document).ready(function() {
    $("#execute").on("click", function () {
        var packVal = msgpack.pack($("#input").val());
        $("#output").val(
            packVal.map(function (value) {
                return value.toString(16);
            }).join(" ")
        );
    });
});
