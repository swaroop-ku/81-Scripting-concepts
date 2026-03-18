class Bank {
    accName: string;
    balance: number;

    set(accName: string, balance: number) {
        this.accName = accName;
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
        console.log("Deposited Amount: " + amount);
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient Balance!");
        } else {
            this.balance = this.balance - amount;
            console.log("Withdrawn Amount: " + amount);
        }
    }

    display() {
        console.log("Account Holder Name: " + this.accName);
        console.log("Current Balance: " + this.balance);
    }
}

let b1 = new Bank();

let accname = prompt("Enter Account Holder Name:");
let bal = prompt("Enter Initial Balance:");

if (accname !== null && bal !== null) {
    let bal1 = parseInt(bal);
    b1.set(accname, bal1);

    let d = prompt("Enter Deposit Amount:");
    if (d !== null) {
        b1.deposit(parseInt(d));
    }

    let w = prompt("Enter Withdraw Amount:");
    if (w !== null) {
        b1.withdraw(parseInt(w));
    }

    b1.display();
}