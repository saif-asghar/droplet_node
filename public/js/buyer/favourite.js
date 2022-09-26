

function addToFavourites(e){
    let userEmail = $("#userEmail").val();
    let productID = e.parentElement.childNodes[1].value;
    let icon = e.childNodes[0];
    icon.classList.toggle('colorRed');    
    


        $.ajax({
            url: "/favourites",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({userEmail: userEmail, productID: productID}),
            success: function(res){
    
                
                textBox.classList.remove('hiddenDplay');
                textBox.innerHTML = `<i class="fa fa-heart" style="margin-right: 10px"></i>${res.response}`;
                
    
                setTimeout(function(){
                    textBox.classList.add('hiddenDplay');
                }, 5000)
    
    
            }
        });
    
    

}



