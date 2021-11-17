function tambah(a, b) {
  if (!a && !b && a !== 0 && b !== 0) {
    return "silahkan isi input";
  }

  return a + b
}

module.exports = tambah;
