window.onload = function() {
  var board = document.querySelector('.board-js');
  board.addEventListener('click', addX);

  var button = document.getElementsByTagName('button');
  button.addEventListener('click',resetAll);
};

var centinel = true;

  function addX(event) {
    if(event.target.matches('td') && event.target.textContent === '') {
     if (centinel)
     event.target.textContent = 'X';
     else
     event.target.textContent = 'O'
     centinel = !centinel;
   }
  }

  function resetAll(event) {
    var arrayOfTdElements = document.getElementsByTagName('td');
    var variables = 0;
    for (var i = 0; i < arrayOfTdElements;i++) {
      if(arrayOfTdElements[i].textContent !== '') {
        variables += 1;
      }
    }

    if (variables === arrayOfTdElements.length) {
      arrayOfTdElements[i].textContent = '';
    }
  }
