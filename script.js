// хранилице сгенерированого массива
let frame = new Array(0, 0, 0, 0, 0, 0);
// хранилище выбранных элементов
let userFrame = new Array(0, 0, 0, 0, 0, 0);
// количество синих квадратов
let sumArr = 0;
// расчет к-ва синих квадратов и определение порядка
function getBlue() {
  var x = 1 + Math.floor(Math.random() * 3);
  for (; sumArr < x; ) {
    for (i = 0, j = x; i < frame.length, j > 0; i++) {
      let r = Math.random();
      if (r > 0.3) {
        frame[i] = 1;
        j--;
      }

      sumArr += frame[i];
    }
  }
  return frame;
}
// расскраска ячеек
function coloring() {
  for (i = 0; i < frame.length; i++) {
    if (frame[i] == 1) {
      let t = document.getElementById(i);
      t.style.background = "blue";
    } else {
      let t = document.getElementById(i);
      t.style.background = "green";
    }
  }
}
// установка бордера
function getBorder(n) {
  let w = document.getElementById(n);
  w.style.border = "10px solid yellow";
  userFrame[n] = 1;
  console.log(userFrame);
}
// проверка условия
function submit() {
  if (frame.join() == userFrame.join()) {
    alert("верно");
    window.location.reload();
    coloring();
  } else {
    alert("не верно");
    window.location.reload();

    console.log(x);
  }
}

getBlue();
coloring();
