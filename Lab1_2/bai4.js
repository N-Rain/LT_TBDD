var bill;

function calculateBill(bill) {
    bill = prompt("Bill ?");
    var tip = bill * (15 / 100);
    var tip2 = bill * (20 / 100);

    (bill >= 50 && bill <= 300) ? console.log("The bill was " + bill + ", the tip was " + tip + ", and the total value " + (bill + tip)): console.log("The bill was " + bill + ", the tip was " + tip2 + ", and the total value " + (bill + tip2));
}