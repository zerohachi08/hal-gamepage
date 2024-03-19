// csvをjsonに書き換える関数
function csv2json(csvArray){
  let jsonArray = [];

  let RowArray = csvArray.split('\n');
  let items = RowArray[0].split(',');
  for(let i = 1; i < RowArray.length; i++){
      let cellArray = RowArray[i].split(',');
      let line = new Object();
      for(let j = 0; j < items.length; j++){
          line[items[j]] = cellArray[j];
      }
      jsonArray.push(line);
  }
  return jsonArray;
}

// csv
let path = './sheet1.csv';
const promise = () => fetch("sheet1.csv")
.then(function(response){
   if (!response.ok) {return Promise.reject(new Error("error"));}
   return response.text();
}) 
.then(function(text){
  const jsondata = csv2json(text);
  
  jsondata.forEach((element) => {
    document.querySelector("#include").insertAdjacentHTML('afterbegin', '<div class="student"></div>');
    document.querySelector(".student").insertAdjacentHTML('beforeend', '<p>クラス名:' + element['class'] + '</p>');
    document.querySelector(".student").insertAdjacentHTML('beforeend', '<p>出席番号:' + element['number'] + '</p>');
    document.querySelector(".student").insertAdjacentHTML('beforeend', '<p>名前:' + element['name'] + '</p>');
    document.querySelector(".student").insertAdjacentHTML('beforeend', '<p>ゲーム名:' + element['gametitle'] + '</p>');
    document.querySelector(".student").insertAdjacentHTML('beforeend', '<p>画像名:' + element['gameimage'] + '</p>');
  });
}) 
.catch(function(error){console.error("fetch error", error);  //  error処理
});

document.addEventListener("DOMContentLoaded", (event) => {
  promise();
});