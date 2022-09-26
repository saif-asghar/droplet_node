let subTotal = document.querySelector('#subTotal');
const quantityOfProduct = document.getElementsByName('quantityOfProduct');
const body = document.querySelector('body');





//REPEATING FUNCTIONS
function totalPrice(){

    let totalPrice = 0;
    document.querySelectorAll('.individual-price').forEach(function(price){
        
        let eachProductPrice = price.innerHTML;
    
        totalPrice += Number(eachProductPrice);
    
    })
    
    subTotal.innerHTML = totalPrice;
}
totalPrice();







// increment / decrement buttons
var buttonPlus  = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  $n.val(Number($n.val())+1 );

  var $p = Number($(this).parent(".qty-container").parent('.item_qty').parent('.tr_item').find(".priceOnePiece").val());
  var $m = $(this).parent(".qty-container").parent('.item_qty').parent('.tr_item').find(".individual-price");
  $m.html(Number($m.html())+$p);

  totalPrice();
});

var incrementMinus = buttonMinus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount-1);
  }
  var $p = Number($(this).parent(".qty-container").parent('.item_qty').parent('.tr_item').find(".priceOnePiece").val());
  var $m = $(this).parent(".qty-container").parent('.item_qty').parent('.tr_item').find(".individual-price");
  console.log();
  if(Number($m.html()) > 0){  
    $m.html(Number($m.html())-$p);
  }

  totalPrice();
});





// REMOVE BUTTON
const removeBtn  = $(".removeItem");

removeBtn.click(function() {
    let $n = $(this).parent('.item_remove').parent('.tr_item');
    // console.log($n);
    let $m = $(this).parent('.item_remove').find('.product-id').val();
    let $e = $(this).parent('.item_remove').find('.user-email').val();
    let $r = $(this).parent('.item_remove').parent('.tr_item');
    // $r.attr('style', 'display: none;');
    $r.remove();
    totalPrice();
    $.ajax({
        url: "/remove-product",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({productID: $m, userEmail: $e}),
        success: function(res){
        }
      })
})

















