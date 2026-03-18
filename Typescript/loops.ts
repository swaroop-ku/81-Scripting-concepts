var n = prompt("Enter the number to find factorial");
if(n !== null){
    var num = parseInt(n);
    var fact = 1;
    for(var i = 1; i <= num; i++){
        fact = fact*i;
    }
    document.body.innerHTML += "<h4>Factorial:" +fact+ "</h4>";
}