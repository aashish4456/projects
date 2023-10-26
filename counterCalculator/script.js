const number = document.getElementById('number');

const increment = () => {
  let value = parseInt(number.innerHTML);
  number.innerHTML = value + 1;
};

const decrement = () => {
  let value = parseInt(number.innerHTML);
  number.innerHTML = value - 1;
};

const neutral = () => {
  number.innerHTML = 0;
};
