const fridge = ['Apple', 'Orange', 'Banana', 'Chicken', 'Egg'];

function goToKitchen() {
  console.log('Go to Kitchen');
}

function checkEggAvailability() {
  if (fridge.includes('Egg')) {
    console.log('The egg is exist');
    return true;
  }

  console.log("The egg doesn't exist");
  return false;
}

function buyEgg() {
  console.log('Go to Market');
  console.log('Buy the egg');
  console.log('Go back home');
}

function cookTheEgg() {
  console.log('Prepare the fryer');
  console.log('Pour the oil');
  console.log('Lit up the stove');
  console.log('Cook the egge');
}

function eggIsReady() {
  console.log('Egg is ready');
}

function start() {
  goToKitchen();
  !checkEggAvailability() && buyEgg();
  cookTheEgg();
  eggIsReady();
}

start();
