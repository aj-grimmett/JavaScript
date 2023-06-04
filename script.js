let Mark = {
  fullName: 'Mark Miller',
  weight: 78 + 'kg',
  height: 1.69 + 'm',
  clacBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

let John = {
  fullNme: 'John Smith',
  weight: 92,
  height: 1.95,
  clacBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.pop, ush(tip + bills[i]);
}

const x = 23;
const sam = ' I am Sam';
