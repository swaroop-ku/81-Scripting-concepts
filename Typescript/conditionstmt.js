var a = prompt("Enter your age:");
if (a !== null) {
    var age = parseInt(a);
    if (age < 18) {
        document.body.innerHTML += "<h3>age:" + age + "</h3>";
        document.body.innerHTML += "<h3>You cannot drive</h3>";
    }
    else {
        document.body.innerHTML += "<h3>age:" + age + "</h3>";
        document.body.innerHTML += "<h3>You can drive</h3>";
    }
}
