const account = {
    balance: 500,
    isBlocked: false
}

const { balance, isBlocked } = account;

if (isBlocked === true) console.log("Account blocked");
else if (balance < 100) console.log("low balance");
else console.log("ok");
