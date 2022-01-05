//Australia 2021
const taxRules = [
  {
    incomeRange: {
      from: 0,
      to: 18200,
    },
    taxRate: 0,
    //Tax Range maximun
    max: 0,
  },
  {
    incomeRange: {
      from: 18201,
      to: 45000,
    },
    taxRate: 0.19,
    //Tax Range maximun
    max: 5092,
  },
  {
    incomeRange: {
      from: 45001,
      to: 120000,
    },
    taxRate: 0.325,
    //Tax Range maximun
    max: 24375,
  },
  {
    incomeRange: {
      from: 120001,
      to: 180000,
    },
    taxRate: 0.37,
    //Tax Range maximun
    max: 22200,
  },
  {
    incomeRange: {
      from: 180001,
      to: Number.POSITIVE_INFINITY,
    },
    taxRate: 0.45,
  },
];

const getArraySum = (a) => {
  let total = 0;
  for (let i in a) {
    total += a[i];
  }
  return total;
};

const Calculation = (income) => {
  //get all tax range maximum
  const maxAll = taxRules.map((item) => item.max);
  //remove last element, because it undifined.
  maxAll.pop();
  //get income range index
  const ruleIndex = taxRules.findIndex(
    (ruleIndex) =>
      ruleIndex.incomeRange.from <= income && ruleIndex.incomeRange.to >= income
  );
  //get tax range rule
  const rule = taxRules[ruleIndex];
  const taxRange = maxAll.slice(0, ruleIndex);
  //get tax in this range
  const tax = (income - (rule.incomeRange.from - 1)) * rule.taxRate;
  //tax bracket
  taxRange.push(tax);
  //estimated taxable income
  const taxAll = getArraySum(taxRange);
  return { taxAll, taxRange };
};

export default Calculation;

//It is old version
// let Australia = {
//   2021: [
//     [180000, 0.45],
//     [120000, 0.35],
//     [45000, 0.327],
//     [18200, 0.19],
//   ],
//   taxBracketAU21: [51667, 29467, 5092],
// };

// const Calculation = (income, country, year) => {
//   let taxableIncome = 0;
//   let taxBracket = [];
//   country = Australia || country;
//   year = 2021 || year;
//   if (country && year) {
//     if (income > country[year][0][0]) {
//       taxableIncome =
//         (income - country[year][0][0]) * country[year][0][1] +
//         country.taxBracketAU21[0];
//       taxBracket = [0, 5092, 24375, 22200];
//       taxBracket.push((income - country[year][0][0]) * country[year][0][1]);
//     } else if (income > 120000) {
//       taxableIncome =
//         (income - country[year][1][0]) * country[year][1][1] +
//         country.taxBracketAU21[1];
//       taxBracket = [0, 5092, 24375];
//       taxBracket.push((income - country[year][1][0]) * country[year][1][1]);
//     } else if (income > 45000) {
//       taxableIncome =
//         (income - country[year][2][0]) * country[year][2][1] +
//         country.taxBracketAU21[2];
//       taxBracket = [0, 5092];

//       taxBracket.push((income - country[year][2][0]) * country[year][2][1]);
//     } else if (income > 18200) {
//       taxableIncome = (income - country[year][3][0]) * country[year][3][1];

//       taxBracket = [0];
//       taxBracket.push((income - country[year][3][0]) * country[year][3][1]);
//     } else {
//       taxableIncome = 0;
//       taxBracket = [0];
//     }
//   }
//   console.log(taxableIncome, taxBracket);
//   return { taxableIncome, taxBracket };
// };
