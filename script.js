const message = document.getElementById('message');
const text = document.getElementById('text');
const sendButton = document.getElementById('send');
const clearButton = document.getElementById('clear');


//This function will display the message at the bottom of the page in the <p> element
function display(){

    //This textValue will grab the value of the input type with the id of "text" 
    let textValue = text.value;
    //The content of the <p> tag with the id of "message" will be the value that textValue holds.
    message.innerHTML = textValue;

}

sendButton.addEventListener('click', display);


//This function will clear the messages in the message section and in the input field
function clearMessage() {

    //This says to make content of the variable "message" empty
    message.innerHTML = ' ';
    //This says to make the content of the variable text empty
    text.value = ' ';

}

clearButton.addEventListener('click', clearMessage);

