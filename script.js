const message = document.getElementById('message');
const text = document.getElementById('text');
const sendButton = document.getElementById('send');
const clearButton = document.getElementById('clear');


function display(){
    let textValue = text.value;
    message.innerHTML = textValue;
}

sendButton.addEventListener('click', display);


function clearMessage() {
  message.innerHTML = ' ';
  text.value = ' ';
}

clearButton.addEventListener('click', clearMessage);