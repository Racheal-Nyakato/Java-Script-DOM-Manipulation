//access items
let heading = document.querySelector('#heading');
let fontSelect = document.querySelector('#font-select');
let colorChange = document.querySelector('#color');
let changeFont = document.querySelector('#font');

// change fontsize
fontSelect.addEventListener('change',function(){
   
    let selection = fontSelect.value;

    if(selection == '12px'){
        heading.style.fontSize = '12px';
    }
    else if(selection == '24px'){
        heading.style.fontSize = '24px';
    }
    else{
        heading.style.fontSize = '36px';
    }
        
})

// Change Text color

colorChange.addEventListener('change',function(){
   
    let colorSelection = colorChange.value;

    if(colorSelection == 'red'){
        heading.style.color = 'red';
    }
    else if(colorSelection == 'yellow'){
        heading.style.color = 'yellow';
    }
    else{
        heading.style.color = 'green';
    }
        
})

// change font family
changeFont.addEventListener('change',function(){

    let fontType = changeFont.value;

    if(fontType == 'Arial'){
        heading.style.fontFamily = 'Arial, sans-serif';
    }
    else if(fontType == 'Times New Roman'){
        heading.style.fontFamily = 'Times New Roman';
    }
    else{
        heading.style.fontFamily = 'Georgia';
    }
        
})