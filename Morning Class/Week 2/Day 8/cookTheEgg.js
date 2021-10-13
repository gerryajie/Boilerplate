const fridge = ['Apple', 'Orange', 'Banana', 'Meat', 'Egg'];

function goToKitchen() {
  console.log('Go to kitchen');
}

function checkEggAvailability() {
  if (fridge.includes('Egg')) {
    console.log('Egg is exist');
    return true;
  }

  console.log('Egg is not exist');
  return false;
}

function goToMarket() {
  console.log('Go to Market');
  console.log('Buy the egg');
  console.log('Go back home');
}

function cookTheEgg() {
  console.log('Prepare the fryer');
  console.log('Pour the oil');
  console.log('Lit up the stove');
  console.log('Cook the egg');
}

function eggIsReady() {
  console.log('The egg is ready');
}

function start() {
  goToKitchen();
  !checkEggAvailability() && goToMarket();
  cookTheEgg();
  eggIsReady();
}

start();
