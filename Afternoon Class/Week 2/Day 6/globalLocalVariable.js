// Global variable
let message = 'Muhazi Ramadhan';

function hello() {
  // Local variable
  let message = 'Mochamad Dena Eka Putra';
  // You can change value of global
  // message = 'Mishar Hidayatullah';

  console.log(message);
}

// It will access local variable
hello();

// It will access global variable
console.log(message);
