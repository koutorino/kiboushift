'use-strict';


const result = document.querySelector('#result'); 
const shift = JSON.parse(localStorage.getItem('shifts'));

shift.forEach((e) => {
  //trの作成
  const tr = document.createElement('tr');
  result.appendChild(tr);

  //オブジェクトを配列に変換
  const objArray = Object.entries(e);
  objArray.forEach((arr) => {
  
  //tdの作成
    const td = document.createElement('td');
    td.textContent = arr[1];
    tr.appendChild(td);
  });

});