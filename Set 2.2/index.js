
let table_rows = document.querySelectorAll('#Table tbody tr');
let searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', function(){

    let filter = searchBar.value.toLowerCase();

    table_rows.forEach(row => {
        let rowText = row.textContent.toLowerCase();
        if (rowText.includes(filter)){
        row.style.display = '';
        }
    else{
        row.style.display = 'none';
        }
    });

})
