

    let addBtn = document.querySelector('#add-btn');
    let bucketList = document.querySelector('#bucket-list');
    let userInput = document.querySelector('#user-input');
    
    addBtn.addEventListener('click', function(){
        let userText = userInput.value;
        let li = document.createElement('li');
        li.textContent = userText;
        bucketList.appendChild(li); 
        
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);
        editBtn.addEventListener('click', function(){
            let newText = prompt('Edit List Item:', userText);
            console.dir(newText);
            if (newText != null){
               li.textContent = newText;
               li.appendChild(editBtn);
               li.appendChild(deleteBtn);
            }
        })

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener('click',function(){
            li.remove();
        })

       userInput.value = '';
    })
    
    
