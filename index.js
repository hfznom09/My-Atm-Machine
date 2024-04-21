#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let pinCode = 3214;
let answerconfirm = { trans: "Yes" };
let mycode = await inquirer.prompt({
    name: "pin",
    message: "enter your four digit code",
    type: "number",
});
if (mycode.pin === pinCode) {
    while (answerconfirm.trans == "Yes") {
        console.log("   **** Welcome ****    ");
        console.log(" To The Noman's Bank Service ");
        let answer = await inquirer.prompt([
            {
                message: "select one of the opretor to perfom action",
                type: "list",
                name: "operator",
                choices: ["Fast cash", "Cash withdrawl", "Balance inquiry"],
            },
        ]);
        if (answer.operator === "Cash withdrawl") {
            let amountAns = await inquirer.prompt([
                {
                    message: "Enter your amount",
                    type: "number",
                    name: "amount",
                },
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Oppsss! There is an insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log("your remaining balance is : " + myBalance);
            }
        }
        if (answer.operator === "Fast cash") {
            let operations = await inquirer.prompt([
                {
                    message: "Choice your amount",
                    type: "list",
                    name: "operate",
                    choices: [1000, 3000, 5000, 10000, 60000],
                },
            ]);
            if (operations.operate > myBalance) {
                console.log("Oppsss! There is an insufficient balance");
            }
            else {
                myBalance -= operations.operate;
                console.log("your remaining balance is : " + myBalance);
            }
        }
        if (answer.operator === "Balance inquiry") {
            console.log(myBalance);
        }
        answerconfirm = await inquirer.prompt([
            {
                message: "\n Do you want to another transaction?",
                type: "list",
                name: "trans",
                choices: ["Yes", "No"],
            },
        ]);
        console.log("   **** Thank You ****        ");
        console.log("For Using Noman's Bank Service");
    }
}
else {
    console.log("your four digit code is incorrect");
}
