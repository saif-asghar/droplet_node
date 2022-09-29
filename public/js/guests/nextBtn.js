let theProducts = document.querySelectorAll('.the-products');

let page = 1;
let limit = 12;

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

}