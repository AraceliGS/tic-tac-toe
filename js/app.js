window.onload = function() {
  var board = document.querySelector('.board-js');
  board.addEventListener('click', addX);

  var button = document.querySelector('button');
  button.addEventListener('click', resetAll);
  // button.removeEventListener('click', resetAll);
};

var centinel = true;

function addX(event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel)
      event.target.textContent = 'X';
    else
      event.target.textContent = 'O';
    centinel = !centinel;
  }
}

function resetAll(event) {
  // alert(event.target);
  var arrayOfTdElements = document.getElementsByTagName('td');
  for (var i = 0; i < arrayOfTdElements.length; i++) {
    arrayOfTdElements[i].textContent = ' ';
  }
  for (var i = 0; i < arrayOfTdElements.length; i++) {
    if (arrayOfTdElements[i].textContent = ' ') {
      event.preventDefault();
      location.reload();
    }
  }
}
