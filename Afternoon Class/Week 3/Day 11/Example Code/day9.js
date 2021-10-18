let coronaCase = [
  {
    name: 'Agus',
    status: 'Positive',
  },
  {
    name: 'Doni',
    status: 'Negative',
  },
  {
    name: 'Gogon',
    status: 'Suspect',
  },
  {
    name: 'Hendra',
    status: 'Suspect',
  },
  {
    name: 'Ryan',
    status: 'Negative',
  },
  {
    name: 'Muhidin',
    status: 'Positive',
  },
  {
    name: 'Pipit',
    status: 'Negative',
  },
  {
    name: 'Gilang',
    status: 'Suspect',
  },
  {
    name: 'Wanwan',
    status: 'Positive',
  },
];

let userCase = 2;

switch (userCase) {
  case 1:
    let casePositive = coronaCase.filter(
      (person) => person.status === 'Positive'
    );
    console.log(casePositive);
    break;
  case 2:
    let caseSuspect = coronaCase.filter(
      (person) => person.status === 'Suspect'
    );
    console.log(caseSuspect);
    break;
  case 3:
    let caseNegative = people.filter((person) => person.status === 'Negative');
    console.log(caseNegative);
    break;
  default:
    console.log('No case');
}
