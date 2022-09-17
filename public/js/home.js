//TOP NAVIGATION START

// function NavBar() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//     x.className += " responsive";
//     } else {
//     x.className = "topnav";
//     }
//     }
//     window.onscroll = function() {scrollFunction()};
//     function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.top = "0";
//     document.getElementById("roll_back").style.display = "flex";
//     } else {
//     // document.getElementById("navbar").style.top = "-100px";
//     // document.getElementById("roll_back").style.display = "none";
//     }
// }

//TOP NAVIGATION END





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





// Fetching Products Data From Fetch Api Method if Needed START

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log);

// Fetching Products Data From Fetch Api Method if Needed END

















