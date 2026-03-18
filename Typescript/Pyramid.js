var n = prompt("Enter number of rows:");
if (n !== null) {
    var rows = parseInt(n);
    for (var i = 1; i <= rows; i++) {
        var pattern = "";
        for (var j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
}
