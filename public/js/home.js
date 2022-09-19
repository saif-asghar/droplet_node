
//MAIN SLIDER START

const main = [document.getElementById('main0'), document.getElementById('main1'), document.getElementById('main2')];




let i = 0;

function myfunc(){

    setInterval(function(){
        
        if(!main[i].classList.contains('display-hidden')){

            main[i].setAttribute('class', 'display-hidden');

            if(i + 1 < main.length){

                main[i + 1].removeAttribute('class');

            }else{

                main[0].removeAttribute('class');

            }
        }

        if(i < main.length - 1){

            i++

        }else{

            i = 0;

        }

    }, 5000)

}
myfunc();

//MAIN SLIDER END





//CART BUTTON REDIRECTIONS START

const cartBtn = document.getElementById('cart');
const loginBtn = document.getElementById('loginBtn');

cartBtn.addEventListener('click', function(){
    if(loginBtn.innerHTML === 'Log In'){
        alert('Please Login First to see your Cart')
    }else{
        window.location = '/login';
    }
})

//CART BUTTON REDIRECTIONS END












