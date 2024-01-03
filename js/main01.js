'use strict';

//ログイン
document.querySelector('.button').addEventListener('click', () => {
  const searchId = document.querySelector('#search-id').value;
  const searchPassword = document.querySelector('#search-password').value;
  findUser(searchId, searchPassword);
  
  //クエリパラメーターの作成
  let url = new URL(window.location.href);
  url.searchParams.set('id', searchId);
  console.log(url.href);
});

//登録ID,パスワード
const userDataList = [
  { name: '太郎', password: '0000' },
  { name: '次郎', password: '1234' },
  { name: '三郎', password: '0000' },
  { name: '1111', password: '2345' },
];

//ユーザー検索
function findUser(searchId, searchPassword) {
  const searchResult = document.getElementById('search-result');
  const objectName = JSON.stringify(userDataList.find((data) => data.name === searchId))
  const objectPassword = JSON.stringify(userDataList.find((data) => data.password === searchPassword));
  const targetData = objectName === objectPassword;

  //データがなければ、「該当者なし」と表示して終了
  if (targetData == false || objectName == undefined) {
    searchResult.textContent = 'IDまたはパスワードが違います';
    return;
  }


  // 該当データの名前を表示する
  searchResult.textContent = 'ログインしました。';
  localStorage.setItem('name',searchId);


  //シフトデータに移動
  window.open('file:///c%3A/Users/kk8ta/Desktop/%E3%83%89%E3%83%83%E3%83%88%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB/lesseon%20folder/form02.html', '_blank');


}


//職員編集画面への移動
document.getElementById('edit').addEventListener('click', function () {
  window.open('file:///c%3A/Users/kk8ta/Desktop/%E3%83%89%E3%83%83%E3%83%88%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB/lesseon%20folder/form05.html');
});
