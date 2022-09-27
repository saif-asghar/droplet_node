
//CART BUTTON REDIRECTIONS START

const cartBtn = document.getElementById('cart');
const loginBtn = document.getElementById('loginBtn');

cartBtn.addEventListener('click', function(){
    
    alert('Please Login First to see your Cart');

    let loginAnswer = prompt('would you like to log in y/n');
    
    if(loginAnswer === 'y'){
        window.location = '/login';
    }
    
})

//CART BUTTON REDIRECTIONS END