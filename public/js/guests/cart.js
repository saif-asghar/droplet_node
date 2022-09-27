
//CART BUTTON REDIRECTIONS START

const cartBtn = document.getElementById('cart');
const loginBtn = document.getElementById('loginBtn');



cartBtn.addEventListener('click', redirections);


//CART BUTTON REDIRECTIONS END


const addToCartButton = $('.addToCartButton2');

addToCartButton.click(function(){
    $n = $(this);
    redirections();
})



function redirections(){
    
    alert('Please Login First to see your Cart');

    let loginAnswer = prompt('would you like to log in y/n');
    
    if(loginAnswer === 'y'){
        window.location = '/login';
    }
    
}