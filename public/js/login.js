// Login Sign Up Page START
document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });
  // Login Sign Up Page END
  


const buyerBtn = document.getElementById('buyerBtn'),
sellerBtn = document.getElementById('sellerBtn');

buyerBtn.addEventListener('click', function(){
  buyerBtn.classList.add('active');
  sellerBtn.classList.remove('active');
})

sellerBtn.addEventListener('click', function(){
  buyerBtn.classList.remove('active');
  sellerBtn.classList.add('active');
})
