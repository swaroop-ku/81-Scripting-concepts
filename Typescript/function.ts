function add(n1 : number , n2 : number){
    console.log("Addition:"+(n1+n2));
    console.log("Subtraction:"+(n1-n2));
}

var a1 = prompt("Enter the first number");
var a2 = prompt("Enter the second number");

if(a1 !== null && a2 !== null){
    add(parseInt(a1),parseInt(a2));
}