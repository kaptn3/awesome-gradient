let app = document.querySelector('.app');
let number = document.querySelector('.number');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');

number.onchange = number.oninput = function() {
  app.style.setProperty('--angle', this.value + 'deg');
};

color1.onchange = color1.oninput = function() {
  app.style.setProperty('--color1', this.value);
};

color2.onchange = color2.oninput = function() {
  app.style.setProperty('--color2', this.value);
};