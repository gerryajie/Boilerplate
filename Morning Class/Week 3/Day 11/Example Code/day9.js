//declaration of arrayObject
let coronaVirus = [
  {
    name: 'Andre',
    status: 'Positive',
  },
  {
    name: 'Desta',
    status: 'Negative',
  },
  {
    name: 'Sitaha',
    status: 'Suspect',
  },
  {
    name: 'Tison',
    status: 'Positive',
  },
  {
    name: 'Arsyad',
    status: 'Negative',
  },
  {
    name: 'Winda',
    status: 'Suspect',
  },
  {
    name: 'Hendri',
    status: 'Positive',
  },
  {
    name: 'Sari',
    status: 'Negative',
  },
  {
    name: 'Intan',
    status: 'Suspect',
  },
];

//filter the status
const positive = coronaVirus
  .filter((e) => e.status === 'Positive')
  .map((e) => e.name);
const negative = coronaVirus
  .filter((e) => e.status === 'Negative')
  .map((e) => e.name);
const suspect = coronaVirus
  .filter((e) => e.status === 'Suspect')
  .map((e) => e.name);

//variable choice of the case
let usrChoice = 2;

switch (usrChoice) {
  case 1:
    console.log(positive);
    break;
  case 2:
    console.log(negative);
    break;
  case 3:
    console.log(suspect);
    break;
  default:
    console.log('you are Healthy');
}
