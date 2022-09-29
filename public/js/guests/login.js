
// Login Sign Up Page START
document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
});
document.querySelector('.img__btn2').addEventListener('click', function() {
    document.querySelector('.cont2').classList.toggle('s--signup');
});
  // Login Sign Up Page END
  


const buyerBtn = document.getElementById('buyerBtn'),
sellerBtn = document.getElementById('sellerBtn'),
contSeller = document.getElementById('contSeller'),
contBuyer = document.getElementById('contBuyer');

buyerBtn.addEventListener('click', function(){
  buyerBtn.classList.add('active');
  sellerBtn.classList.remove('active');
  contBuyer.removeAttribute('style');
  contSeller.setAttribute('style', 'display: none;');
})

sellerBtn.addEventListener('click', function(){
  buyerBtn.classList.remove('active');
  sellerBtn.classList.add('active');
  contSeller.removeAttribute('style');
  contBuyer.setAttribute('style', 'display: none;');
})
