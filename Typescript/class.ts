class Student{
    sname : string;
    roll : number;

    set(sname : string,roll : number){
        this.sname = sname;
        this.roll = roll;
    }
    display(){
        console.log("Name of Student:"+this.sname);
        console.log("Roll Number of student:"+this.roll);
    }
}

let s1 = new Student();

let a = prompt("Enter the name of student");
let b = prompt("Enter the roll number");
if(a !== null && b !== null){
    let b1 = parseInt(b);
    s1.set(a,b1);
    s1.display();
}