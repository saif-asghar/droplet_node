const addToCartBtn = document.getElementById('addToCartBtn');
const buyNowBtn = document.getElementById('buyNowBtn');

function redirection(){
    alert('Please Login First to see your Cart')
        let loginAnswer = prompt('would you like to log in y/n');
        if(loginAnswer === 'y'){
            window.location = '/login';
        }
}


addToCartBtn.addEventListener('click', redirection);

buyNowBtn.addEventListener('click', redirection);
