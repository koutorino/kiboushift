'use-strict';

const thTd = document.querySelector('#nameDate')
const result = document.querySelector('#result'); 
const shift = JSON.parse(localStorage.getItem('shifts'));

//theadのth(名前)を作成
const th = document.createElement('th')
thTd.appendChild(th);
th.textContent = '職員名';

//theadのth(日付部分)を作成
for(let i = 0;i <= shift.length - 1; i++){
  const th = document.createElement('th')
  thTd.appendChild(th);
  th.textContent = shift[i].date;
}

//trの作成
const tr = document.createElement('tr');
result.appendChild(tr);

  //td(希望時間)のループ
  const td = document.createElement('td');
  td.textContent = shift[shift.length - 1].id;
  tr.appendChild(td);
  console.log(shift.length);

shift.forEach((user) => {
  //td(希望時間)のループ
  const td = document.createElement('td');
  td.textContent = user.result;
  tr.appendChild(td);
});

// 表の値(tdのみ)を取得して配列を作成
const tableValue = document.querySelector('#table');
const thValue = [];
const tdValue = [];

// 表の値(thのみ)を取得して配列を作成
for(let col = 0; col < tableValue.rows[0].cells.length; col++) {
    thValue.push(tableValue.rows[0].cells[col].innerHTML);
}

// 表の値(tdのみ)を取得して配列を作成
for (let row = 1; row < tableValue.rows.length; row++) {
  for(let col = 0; col < tableValue.rows[row].cells.length; col++) {
    tdValue.push(tableValue.rows[row].cells[col].innerHTML);
  }
}

//mainExcell.jsへの値を送る(Excel作成)
array1.push(thValue);
array1.push(tdValue);

