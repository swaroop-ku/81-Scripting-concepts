let n = prompt("Enter number of rows:");

if (n !== null) {
    let rows: number = parseInt(n);

    for (let i = 1; i <= rows; i++) {
        let pattern: string = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern);
    }
}