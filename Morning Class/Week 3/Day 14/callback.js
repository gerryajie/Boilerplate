const fs = require('fs');

let data = '';

fs.readFile('./files/content1.txt', 'utf-8', (err, data1) => {
  if (err) throw err;
  data += data1 + ' ';
  fs.readFile('./files/content2.txt', 'utf-8', (err, data2) => {
    if (err) throw err;
    data += data2 + ' ';
    fs.readFile('./files/content3.txt', 'utf-8', (err, data3) => {
      if (err) throw err;
      data += data3 + ' ';
      console.log(data);
    });
  });
});
