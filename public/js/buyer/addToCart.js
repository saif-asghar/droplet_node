$(document).ready(function(){
    let textBox = document.getElementById("randomP");
    
    $(".formForAJAX").on("submit", function(event){
        event.preventDefault();
        let userEmail = $("#userEmail").val();
        let productID = $("#productID").val();

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
    })
})