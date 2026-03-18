var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.prototype.set = function (accName, balance) {
        this.accName = accName;
        this.balance = balance;
    };
    Bank.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
        console.log("Deposited Amount: " + amount);
    };
    Bank.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance!");
        }
        else {
            this.balance = this.balance - amount;
            console.log("Withdrawn Amount: " + amount);
        }
    };
    Bank.prototype.display = function () {
        console.log("Account Holder Name: " + this.accName);
        console.log("Current Balance: " + this.balance);
    };
    return Bank;
}());
var b1 = new Bank();
var accname = prompt("Enter Account Holder Name:");
var bal = prompt("Enter Initial Balance:");
if (accname !== null && bal !== null) {
    var bal1 = parseInt(bal);
    b1.set(accname, bal1);
    var d = prompt("Enter Deposit Amount:");
    if (d !== null) {
        b1.deposit(parseInt(d));
    }
    var w = prompt("Enter Withdraw Amount:");
    if (w !== null) {
        b1.withdraw(parseInt(w));
    }
    b1.display();
}
