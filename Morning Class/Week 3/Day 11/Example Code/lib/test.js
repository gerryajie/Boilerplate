module.exports = (sortAscending, sortDecending, data) => {
  if (process.argv.slice(2)[0] == "test") {
    try {
      let error = []

      // Check the sortAscending
      let asc = sortAscending(data);
      for (let i = 0; i < asc.length; i++) {
        if (asc[i] > asc[i + 1]) {
          error.push(sortAscending);
          break;
        }
      }

      // Check the sortDecending
      let dsc = sortDecending(data);
      for (let i = 0; i < asc.length; i++) {
        if (dsc[i] < dsc[i + 1]) {
          error.push(sortDecending);
          break;
        }
      }

      if (error.length > 0) {
        console.log("Result:", error[0].name == "sortAscending" ? asc : dsc);
        console.log();
        throw new Error(`${error[0].name} doesn't work as its expected`);
      } else {
        console.log("sortAscending:", asc);
        console.log("sortDecending:", dsc);
      }
    }

    catch(err) {
      console.error(err.message);
    }
  }
}
