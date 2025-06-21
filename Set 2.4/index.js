
let themeToggler = document.getElementById('theme-toggle');

//localStorage helps to store data in the browser persisently
//getItem method is used to retrive data
//syntax is .getItem(key)
let savedTheme = localStorage.getItem('theme');
    if (savedTheme == 'dark'){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    }
    else{
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    }

themeToggler.addEventListener('click', function(){
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'dark'){
    localStorage.setItem('theme','light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    }
    else{
    localStorage.setItem('theme','dark');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

})