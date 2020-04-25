// Tutaj zaimplementuj akcje do aplikacji bankApp

const WITHDRAW = "withdraw money";
const DEPOSIT = "deposit money";

const withdrawMoney = (value) => ({
    type: WITHDRAW,
    value
})

const depositMoney = (value) => ({
    type: DEPOSIT,
    value
})

export { WITHDRAW, DEPOSIT, withdrawMoney, depositMoney };
