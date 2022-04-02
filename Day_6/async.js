console.log("First line");

const downloadTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("This is a downloaded file");
    reject(new Error("This is an error!"));
  }, 1000);
});

// Promise

// downloadTask
//   .then((response) => {
//     console.log(response);
//     console.log("Last line");
//     return "result from then_1";
//   })
//   .then((response) => {
//     console.log("Then method 2");
//     console.log(response);
//   })
//   .catch(err => {
//       console.error(err);
//   })
//   .finally(() => {
//     console.log("Task ended!");
//   });

// console.log(downloadTask);

async function main() {
  try {
    const result = await downloadTask;
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("This will finally run!");
  }
}

main();
