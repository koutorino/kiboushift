'use-strict';
{

  const thTd = document.querySelector('#nameDate')
  const users = JSON.parse(localStorage.getItem('users'));
  const table = document.querySelector('#table');
  console.log({ users });

  function createTable() {
    //theadのth(名前)を作成
    const th = document.createElement('th')
    thTd.appendChild(th);
    th.textContent = '職員名';

    if (users !== null) {
      const lastDate = new Date(2023, 11 + 1, 0).getDate();
      //theadのth(日付部分)を作成
      for (let i = 1; i < lastDate + 1; i++) {
        const th = document.createElement('th')
        thTd.appendChild(th);
        th.textContent = `${i}`;
      }

      users.forEach((user) => {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        const td = document.createElement('td');
        td.innerHTML = user.name;
        tr.appendChild(td);

        const objArray = user.shift;
        for (let i = 0; i < objArray.length; i++) {
          const td = document.createElement('td');
          td.innerHTML = objArray[i];
          tr.appendChild(td);
        }
      });
    }
  }

  function getTable() {
    // 表の値(tdのみ)を取得して配列を作成
    const tableValue = document.querySelector('#table');
    let thValue = [];
    let tdValue = [];
    let tdValues = [];

    // 表の値(thのみ)を取得して配列を作成
    for (let col = 0; col < tableValue.rows[0].cells.length; col++) {
      thValue.push(tableValue.rows[0].cells[col].innerHTML);
    }

    // 表の値(tdのみ)を取得して配列を作成
    for (let row = 1; row < tableValue.rows.length; row++) {
      for (let col = 0; col < tableValue.rows[row].cells.length; col++) {
        tdValue.push(tableValue.rows[row].cells[col].innerHTML);
      }
      tdValues.push(tdValue);
      tdValue = [];
    }

    //mainExcell.jsへの値を送る(Excel作成)
    array1.push(thValue);
    array1.push(...tdValues);
  }

  createTable();
  getTable();

}


