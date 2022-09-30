let theProducts = document.querySelectorAll('.the-products');
let paginationButtonsNumbers = document.querySelectorAll('.pagination-page-numbers');
let pageNumbersDiv = document.querySelector('.page-numbers');


let page = 1;
let limit = 12;


if(paginationButtonsNumbers.length > 3){

    for(const num of Object.entries(paginationButtonsNumbers)){
        if(num[0] > 2){
            num[1].classList.add('hidden-display');
        }
    }
    
    const nextPageDots = document.createElement('span');
    nextPageDots.setAttribute('class', 'pagination-page-numbers');
    nextPageDots.innerHTML = `...`;    

    pageNumbersDiv.appendChild(nextPageDots);
}

// paginationButtonsNumbers = document.querySelectorAll('.pagination-page-numbers');
paginationButtonsNumbers[0].classList.add('slected-page');

function nextPage(e){

    if((page * limit) < theProducts.length){

        if(theProducts.length - (page * limit) >= 12){

            for(i = ((page - 1) * limit); i < (page * limit); i++){
                theProducts[i].classList.add('hidden-display'); 
            }

            page++;

            for(i = ((page - 1) * limit); i < (page * limit); i++){
                theProducts[i].classList.remove('hidden-display'); 
            }

        }else{

            for(i = ((page - 1) * limit); i < (page * limit); i++){
                theProducts[i].classList.add('hidden-display'); 
            }

            page++;

            for(i = ((page - 1) * limit); i < ((page - 1) * limit) + (theProducts.length - ((page - 1) * limit)); i++){
                theProducts[i].classList.remove('hidden-display'); 
            }
            
        }

    }

    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = 'Prev';
    prevBtn.setAttribute('style', 'display: inline-block; width: 70px;');
    prevBtn.setAttribute('onclick', 'prevPage(this)');

    let btnsDiv = e.parentNode;

    if(page === 2 && !btnsDiv.textContent.includes('Prev')){
        btnsDiv.prepend(prevBtn);
    }
    
    if(((page) * limit) > theProducts.length && theProducts.length - (page * limit) <= 12){
        e.remove();
    }

    if(paginationButtonsNumbers.length >= (page + 2)){
        pageNumbersDiv.removeChild(pageNumbersDiv.lastElementChild);
    }

    paginationButtonsNumbers[page - 2].classList.remove('slected-page');
    paginationButtonsNumbers[page - 1].classList.add('slected-page');

    for(const num of Object.entries(paginationButtonsNumbers)){

        if(Number(num[0] -1) == (page)){
            if(num[1].classList.contains('hidden-display')){
                num[1].classList.remove('hidden-display')
            }
        }

    }

    const prevPageDots = document.createElement('span');
    prevPageDots.setAttribute('class', 'prev-page-dots pagination-page-numbers');
    prevPageDots.innerHTML = `...`;

    if(!pageNumbersDiv.firstElementChild.classList.contains('prev-page-dots') && page >= 4){
        pageNumbersDiv.prepend(prevPageDots);
    }
        
    const nextPageDots = document.createElement('span');
    nextPageDots.setAttribute('class', 'next-page-dots pagination-page-numbers');
    nextPageDots.innerHTML = `...`;

    if(page === 4){

        if(!paginationButtonsNumbers[0].classList.contains('hidden-display')){

            paginationButtonsNumbers[0].classList.add('hidden-display');
        }

    }else if(page === 5){

        if(!paginationButtonsNumbers[1].classList.contains('hidden-display')){

            paginationButtonsNumbers[1].classList.add('hidden-display');
        }

    }else if(page === 6){

        if(!paginationButtonsNumbers[2].classList.contains('hidden-display')){

            paginationButtonsNumbers[2].classList.add('hidden-display');
        }

    }else if(page === 7){

        if(!paginationButtonsNumbers[3].classList.contains('hidden-display')){

            paginationButtonsNumbers[3].classList.add('hidden-display');
        }

    }else if(page === 8){

        if(!paginationButtonsNumbers[4].classList.contains('hidden-display')){

            paginationButtonsNumbers[4].classList.add('hidden-display');
        }

    }else if(page === 9){

        if(!paginationButtonsNumbers[5].classList.contains('hidden-display')){

            paginationButtonsNumbers[5].classList.add('hidden-display');
        }

    }else if(page === 10){

        if(!paginationButtonsNumbers[6].classList.contains('hidden-display')){

            paginationButtonsNumbers[6].classList.add('hidden-display');
        }

    }else if(page === 11){

        if(!paginationButtonsNumbers[7].classList.contains('hidden-display')){

            paginationButtonsNumbers[7].classList.add('hidden-display');
        }

    }else if(page === 12){

        if(!paginationButtonsNumbers[8].classList.contains('hidden-display')){

            paginationButtonsNumbers[8].classList.add('hidden-display');
        }

    }else if(page === 13){

        if(!paginationButtonsNumbers[9].classList.contains('hidden-display')){

            paginationButtonsNumbers[9].classList.add('hidden-display');
        }

    }else if(page === 14){

        if(!paginationButtonsNumbers[10].classList.contains('hidden-display')){

            paginationButtonsNumbers[10].classList.add('hidden-display');
        }

    }

    if(paginationButtonsNumbers.length >= (page + 2)){
        pageNumbersDiv.appendChild(nextPageDots);
    }

    if(paginationButtonsNumbers.length == (page + 2)){
        pageNumbersDiv.removeChild(pageNumbersDiv.lastElementChild);   
    }
}


function prevPage(e){

    if(((page * limit) - limit) >= 0){

        if(theProducts.length - ((page - 1) * limit) <= 12){


            for(i = ((page - 1) * limit); i < ((page - 1) * limit) + (theProducts.length - ((page - 1) * limit)); i++){
                theProducts[i].classList.add('hidden-display'); 
            }

            page--;

            for(i = ((page - 1) * limit); i < (page * limit); i++){
                theProducts[i].classList.remove('hidden-display'); 
            }

        }else{

            for(i = ((page - 1) * limit); i < (page * limit); i++){
                theProducts[i].classList.add('hidden-display'); 
            }

            page--;

            for(i = ((page - 1) * limit); i < (page * limit); i++){
                theProducts[i].classList.remove('hidden-display'); 
            }
            
        }

    }

    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = 'Next';
    nextBtn.setAttribute('style', 'display: inline-block; width: 70px;');
    nextBtn.setAttribute('onclick', 'nextPage(this)');

    let btnsDiv = e.parentNode;

    if(!btnsDiv.textContent.includes('Next')){
        btnsDiv.append(nextBtn);
    }

    if(page === 1){
        e.remove();
    }

    
    paginationButtonsNumbers[page].classList.remove('slected-page');
    paginationButtonsNumbers[page - 1].classList.add('slected-page');

}