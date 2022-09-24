// $(document).ready(function(){
    
    
    
    
// })
let textBox = document.getElementById("randomP");

function addToCart(e){
    
    
    
    // console.log(productID);
    
    let userEmail = $("#userEmail").val();
    // let productID = $(".productID").val();
    let productID = e.parentElement.childNodes[1].value;

        $.ajax({
            url: "/add-to-cart",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({userEmail: userEmail, productID: productID}),
            success: function(res){
                


                textBox.classList.remove('hiddenDplay');
                textBox.innerHTML = `<i class="fa fa-shopping-cart" style="margin-right: 10px"></i>${res.response}`;

                setTimeout(function(){
                    textBox.classList.add('hiddenDplay');
                }, 5000)


            }
        })
    
}