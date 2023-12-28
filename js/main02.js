'use-strict';

//【ようこそ○○さん】
const Username = sessionStorage.getItem('name');
document.querySelector('#helloName').textContent = 'ようこそ' + Username + 'さん！！'

//要素の取得
function render(num) {
  const body = document.querySelector('#siteBody');
//各区切りの作成
  const mainForm = document.createElement('div');
  mainForm.className = 'main-form';
//日付と時間の表示
  const result = document.createElement('div');
  result.className = 'result';
//収集する月の日付と曜日の取得
  const day = new Date(2023, 11, num).getDay();
  const days = [ '日', '月', '火', '水', '木', '金', '土' ];
  const date = document.createElement('p');
  date.textContent = `12/${num} (${days[day]})`
//スライダーの数値を習得
  const value = document.createElement('div');
  value.setAttribute('id', `sliderValue${num}`);
//radioとスライダーをまとめたところ
  const form = document.createElement('div');
  form.className = 'form';
//radioをまとめたところ
  const rad = document.createElement('div');
  rad.className = 'rad';
//各radio用のlabelの作成
  const label1 = document.createElement('label');
  const label2 = document.createElement('label');
  const label3 = document.createElement('label');
//各radioの作成
  const inputShu = document.createElement('input');
  inputShu.setAttribute('type', 'radio');
  inputShu.setAttribute('name', 'sel');
  inputShu.className= 'chek1';
  inputShu.textContent = '終日';
  const inputOff = document.createElement('input');
  inputOff.setAttribute('type', 'radio');
  inputOff.setAttribute('name', 'sel');
  inputOff.className= 'chek2';
  inputOff.textContent = '休み';
  const inputYuky = document.createElement('input');
  inputYuky.setAttribute('type', 'radio');
  inputYuky.setAttribute('name', 'sel');
  inputYuky.className= 'chek3';
  inputYuky.textContent = '有給';
//スライダー部分の作成
  const container = document.createElement('div');
  container.className = 'container';
  const sliderUi = document.createElement('div');
  sliderUi.setAttribute('id', `slider${num}`);
//全体の要素を追加する
  body.appendChild(mainForm);
  mainForm.appendChild(result);
  result.appendChild(date);
  result.appendChild(value);
  mainForm.appendChild(form);
  form.appendChild(rad);
  rad.appendChild(label1);
  rad.appendChild(label2);
  rad.appendChild(label3);
  label1.appendChild(inputShu);
  label2.appendChild(inputOff);
  label3.appendChild(inputYuky);
  form.appendChild(container);
  container.appendChild(sliderUi);
//スライダー作成用jquery
  noUiSlider.create(sliderUi, {
    start: [8.5, 21],  // 初期の範囲値
    connect: true,    // 範囲を色付きのバーで結ぶ
    range: {
      'min': 8.5,
      'max': 21
    },
    step: 0.5,
    tooltips: true,  // ハンドル上にツールチップを表示
    pips: {  // 特定の間隔で値のマーカーを追加
      mode: 'positions',
      values: [-5, 25, 50, 75, 100],
      density: 10
    }
  });

}

//スライダー部分の取得
function sliderValue(num) {
  const slider = document.getElementById(`slider${num}`);
  const valueElement = document.getElementById(`sliderValue${num}`);
  const chek1 = document.querySelector('.chek1');
  const chek2 = document.querySelector('.chek2');
  const chek3 = document.querySelector('.chek3');

  //スライダーを動かしたときに数値を変更する
  slider.noUiSlider.on('update', function (values) {
    valueElement.innerHTML = values.join(' - ');

    //ラジオボタンを押したときに変更される設定
    chek1.addEventListener('change', () => {
      valueElement.innerHTML = '12.00 - 21.00';
    });

    chek2.addEventListener('change', () => {
      valueElement.innerHTML = '休み';
    });

    chek3.addEventListener('change', () => {
      valueElement.innerHTML = '有給';
    });
  });
}

//当月の最終日を取得する
const lastDate = new Date(2023, 11 + 1, 0).getDate();

//当月分繰り返し、要素を作成する
for (let i = 1; i <= lastDate; i++) {
  render(i);
  sliderValue(i)
}













