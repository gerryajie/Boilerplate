const tambah = require("./tambah")

test("pertambahan bilangan 1 dan 2 sama dengan 3", () => {
  expect(tambah(1, 2)).toBe(3);
})

// test("pertambahan bilangan tanpa input, menampilkan pesan silahkan isi input", () => {
//   expect(tambah()).toBe("silahkan isi input");
// })

test("pertambahan 0 dan 0 sama dengan 0", () => {
  expect(tambah(0, 0)).toBe(0);
})