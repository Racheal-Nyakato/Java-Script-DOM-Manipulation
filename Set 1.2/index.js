

let characterCount = document.getElementById('counter');
let textArea = document.getElementById('textarea');

// Event listener on text area will be used to increase count based on user input
textArea.addEventListener('input',function(){
    //text area length will be placed in count below text area
    if (textArea.value.length < '200'){
        characterCount.textContent = 200 - textArea.value.length;
    }
    //if user exceeds the 200 word limit, they will be alerted
    else{
        alert('You have exceeded the character limit');
    }
})