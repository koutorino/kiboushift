'use-strict';



function render(num) {
  const body = document.querySelector('#siteBody');
  const mainForm = document.createElement('div');
  mainForm.className = 'main-form';
  const result = document.createElement('div');
  result.className = 'result';
  const day = document.createElement('p');
  day.textContent = `12/${num}` 
  const value = document.createElement('div');
  value.setAttribute('id',`sliderValue${num}`);
  const form = document.createElement('div');
  form.className = 'form';
  const rad = document.createElement('div');
  rad.className = 'rad';
  const label1 = document.createElement('label');
  const label2 = document.createElement('label');
  const label3 = document.createElement('label');
  const inputShu = document.createElement('input');
   inputShu.setAttribute('type', 'radio');
   inputShu.setAttribute('name', 'sel');
   inputShu.textContent = '終日';
  const inputOff = document.createElement('input');
  inputOff.setAttribute('type', 'radio');
  inputOff.setAttribute('name', 'sel');
  inputOff.textContent = '休み';
  const inputYuky = document.createElement('input');
  inputYuky.setAttribute('type', 'radio');
  inputYuky.setAttribute('name', 'sel');
  inputYuky.textContent = '有給';
  const container = document.createElement('div');
  container.className = 'container';
  const sliderUi = document.createElement('div');
  sliderUi.setAttribute('id',`slider${num}`);

  body.appendChild(mainForm);
  mainForm.appendChild(result);
  result.appendChild(day);
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
  
  const slider = document.getElementById(`slider`);
  const valueElement = document.getElementById(`sliderValue`);

  const chek1 = document.getElementById('chek1');
  const chek2 = document.getElementById('chek2');
  const chek3 = document.getElementById('chek3');

  
  slider.noUiSlider.on('update', function (values) {
    valueElement.innerHTML = values.join(' - ');
  });

chek1.addEventListener('change', () => {
  valueElement.innerHTML = '12.00 - 21.00';
});

chek2.addEventListener('change', () => {
  valueElement.innerHTML = '休み';
});

chek3.addEventListener('change', () => {
  valueElement.innerHTML = '有給';
});


}


function sliderValue(num) {
  const slider = document.getElementById(`slider${num}`);
  const valueElement = document.getElementById(`sliderValue${num}`);
  
  slider.noUiSlider.on('update', function (values) {
    valueElement.innerHTML = values.join(' - ');

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



for (let i = 0; i < 10; i++) {
  render(i);
  }
  
  
  for (let i = 0; i < 10; i++) {
    sliderValue(i)
    }

  








 
