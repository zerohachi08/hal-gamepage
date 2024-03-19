let path = './sheet1.csv';
const promise = () => new Promise((resolve, reject) => {
  reject();
})
.then(() => {
  console.log("resolveしたよ");
})
.catch(() => {
  console.log("rejectしたよ");
});

document.addEventListener("DOMContentLoaded", (event) => {
  promise();
});