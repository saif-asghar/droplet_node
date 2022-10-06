function deleteProduct(e){
    const answer = prompt('are you sure you want to delete this product (y/n)');
    const userEmail = document.getElementById('signUpEmail').value;
    const productID = document.getElementById('productID').value;

    if(answer === 'y'){
        $.ajax({
            url: "/delete",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({userEmail: userEmail, productID: productID}),
            success: function(res){

            }
        })
        const parentRow = e.parentNode.parentNode.parentNode;
        parentRow.style.display = 'none';
    }
}