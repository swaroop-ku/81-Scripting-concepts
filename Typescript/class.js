var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.set = function (sname, roll) {
        this.sname = sname;
        this.roll = roll;
    };
    Student.prototype.display = function () {
        console.log("Name of Student:" + this.sname);
        console.log("Roll Number of student:" + this.roll);
    };
    return Student;
}());
var s1 = new Student();
var a = prompt("Enter the name of student");
var b = prompt("Enter the roll number");
if (a !== null && b !== null) {
    var b1 = parseInt(b);
    s1.set(a, b1);
    s1.display();
}
