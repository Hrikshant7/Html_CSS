Promise.reject(1)
  .catch((err) => {
      console.log("3", err);
      return 10;
  })
  .then((data) => {
      console.log("15", data)
  })
  .catch(console.log);