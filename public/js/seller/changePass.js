const errBox = document.getElementById('err');
const errBox2 = document.getElementById('err2');
const errBox3 = document.getElementById('err3');
const changePassBtn = document.getElementById('changePassBtn');
let newPass = document.getElementById('newPass');
const signUpEmail2 = document.getElementById('signUpEmail').value;


function openNewPass(e){
    
    const signUpEmail = e.nextElementSibling.value;
    let oldPass = e.value;
    

    $.ajax({
        url: "/check-password",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({oldPass: oldPass, signUpEmail: signUpEmail}),
        success: function(res){

            if(res.confirmation === 'yes'){
                newPass.classList.remove('passwords-disabled');
                newPass.classList.add('passwords');
                newPass.removeAttribute('disabled');
                errBox.style.display = 'none';
                errBox2.removeAttribute('style');
                errBox3.removeAttribute('style');
                changePassBtn.removeAttribute('disabled');
            }else{
                newPass.classList.add('passwords-disabled');
                newPass.classList.remove('passwords');
                newPass.setAttribute('disabled', true);
                errBox.removeAttribute('style');
                errBox2.style.display = 'none';
                errBox3.style.display = 'none';
                changePassBtn.setAttribute('disabled', true);
            }

        }
    })
}


function changePassword(){

    const ans = prompt('are you sure y/n');
    const newPassV = document.getElementById('newPass').value;
    const oldPass = document.getElementById('oldPass');


    if(ans === 'y'){
        
        $.ajax({
            url: "/change-password",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({newPass: newPassV, signUpEmail: signUpEmail2}),
            success: function(res){
    
                if(res.confirmation === 'success'){
                    const randomP = document.getElementById('randomP');
                    randomP.innerHTML = 'Password changed Successfully';
                    randomP.classList.remove('hiddenDplay');

                    oldPass.value = '';
                    newPass.value = '';
                    errBox2.style.display = 'none';
                    errBox3.style.display = 'none';
                    newPass.setAttribute('disabled', true);
                    newPass.classList.add('passwords-disabled');
                    newPass.classList.remove('passwords');
                    changePassBtn.setAttribute('disabled', true);

                    setTimeout(function(){
                        randomP.classList.add('hiddenDplay');
                    }, 5000)
                }
    
            }
        })

    }
}