//Autocomplete Search bar START


    


function sendData(e){
    const searchResults = document .getElementById('searchResults');
    let match = e.value.match(/^[a-zA-Z ]*/);
    let match2 = e.value.match(/\s*/);
    if(match2[0] === e.value){
        searchResults.innerHTML = '';
        return;
    }
    if(match[0] === e.value){
        fetch('getProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({payload: e.value})
        }).then(res => res.json()).then(data => {
            let payload = data.payload;
            searchResults.innerHTML = '';
            if(payload.length < 1){
                searchResults.innerHTML = ``;
                return;
            }
            payload.forEach((item, index) => {
                if(index > 0) searchResults.innerHTML += '<hr>';
                searchResults.innerHTML += `<p class="select-search">${item.title}</p>`;
            })

            searchResults.addEventListener('click', function(e){
                let searchBar = document.querySelector('.search-bar-input');
                
                let div = e.target;
                searchBar.value = div.textContent;
            })

        })
        return;
    }
}


//Autocomplete Search bar END