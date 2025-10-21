const fetchData = new Promise((resolve, reject) => {
  let success = false;
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Failed to fetch data");
    }
  }, 1000);
});

fetchData.then((msg) => console.log(msg)).catch((error) => console.log(error));
