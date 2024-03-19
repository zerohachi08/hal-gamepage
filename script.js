let path = 'sheet1.csv';
const promise = () => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    resolve(data);
  });
})
.then((data) => {
  console.log(data);
  console.log("resolveしたよ");
})
.catch((err) => {
  console.log("rejectしたよ");
});

document.addEventListener("DOMContentLoaded", (event) => {
  promise();
});