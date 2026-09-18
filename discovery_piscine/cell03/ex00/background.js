const button = document.getElementById('changeColorBtn');

function getRandomColor() {
  const hexChars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});