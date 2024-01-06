'use-strict';

{

  const btn = document.querySelector('button');
  const table = document.querySelector('table');
  const users = JSON.parse(localStorage.getItem('users'));

  //localStorageの値を表にする。
  if (users !== null) {
    users.forEach((user) => {
      const tr = document.createElement('tr');
      table.appendChild(tr);
      const objArray = Object.entries(user);
      objArray.splice(3, 1);
      objArray.push(['del', '<button id="del"><span class="material-symbols-outlined icon">delete_forever</span></button>']);
      console.log(objArray);
      objArray.forEach((arr) => {
        if (arr[0] === 'id') {
          return true;
        }
        const td = document.createElement('td');
        td.innerHTML = arr[1];
        tr.appendChild(td);
      });
    });
  }


  //職員の追加
  function appnedRow() {
    const formName = document.querySelector('#formName');
    const formNum = document.querySelector('#formNum');
    if (formName.value == "" || formNum.value == "") {
      alert('値を入力してから追加してください。');
      return;
    }
    const table = document.querySelector('#tbl');
    const count = table.rows.length;
    const row = table.insertRow(count);
    const c1 = row.insertCell(0);
    const c2 = row.insertCell(1);
    const c3 = row.insertCell(2);

    c1.innerHTML = formName.value;
    c2.innerHTML = formNum.value;
    c3.innerHTML = '<button id="del"><span class="material-symbols-outlined icon">delete_forever</span></button>'
  }

  //職員の削除
  function deleteRow(obj) {
    if (confirm('この行を解除しますか')) {
      const objTR = obj.parentNode.parentNode;
      objTR.remove();
    }
  }

  //職員の保存
  function saveUsers() {
    const tableValue = document.querySelector('#tbl');
    const userValue = [];
    for (let row = 1; row < table.rows.length; row++) {
      const user = {
        id: crypto.randomUUID(),
        name: tableValue.rows[row].cells[0].innerHTML,
        password: tableValue.rows[row].cells[1].innerHTML,
      }
      userValue.push(user);
    }
    localStorage.setItem('users', JSON.stringify(userValue));
  }



  const delbtns = document.querySelectorAll('#del');
  for (let i = 0; i < delbtns.length; i++) {
    delbtns[i].addEventListener('click', () => {
      deleteRow(delbtns[i]);
      saveUsers();
    });
  }

  btn.addEventListener('click', () => {
    appnedRow();
    if (formName.value == "" || formNum.value == "") {
      return;
    }
    saveUsers()

    formName.value = "";
    formNum.value = "";
  });





}


