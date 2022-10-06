const buttonStep1Next = document.getElementById('buttonStep1Next');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const productCategory = document.getElementById('productCategory');
const errorPg1 = document.getElementById('errorPg1');

buttonStep1Next.addEventListener('click', function(){

    if(productCategory.value === ''){
        errorPg1.removeAttribute('style');
    }else{
        step1.style.display = 'none';
        step2.removeAttribute('style');
    }

})


const step3 = document.getElementById('step3');
const btnStep2Next = document.getElementById('btnStep2Next');
const btnStep2Prev = document.getElementById('btnStep2Prev');
const productName = document.getElementById('productName');
const productInfo = document.getElementById('productInfo');
const productPrice = document.getElementById('productPrice');
const errorPg2 = document.getElementById('errorPg2');

btnStep2Prev.addEventListener('click', function(){
    step2.style.display = 'none';
    step1.removeAttribute('style');
})

btnStep2Next.addEventListener('click', function(){
    
    if(productName.value === '' || productInfo.value === '' || productPrice.value === ''){
        errorPg2.removeAttribute('style');
    }else{
        step3.removeAttribute('style');
        step2.style.display = 'none';
    }

})


const complete = document.getElementById('complete');		
const btnStep3Prev = document.getElementById('btnStep3Prev');
const btnStep3Next = document.getElementById('btnStep3Next');
const productStock = document.getElementById('productStock');
const productTags = document.getElementById('productTags');
const errorPg3 = document.getElementById('errorPg3');
const productCategoryDisable = document.getElementById('productCategoryDisable');
const productNameDisable = document.getElementById('productNameDisable');
const productInfoDisable = document.getElementById('productInfoDisable');
const productPriceDisable = document.getElementById('productPriceDisable');
const productStockDisable = document.getElementById('productStockDisable');
const productTagsDisable = document.getElementById('productTagsDisable');


btnStep3Prev.addEventListener('click', function(){
    step3.style.display = 'none';
    step2.removeAttribute('style');
})

btnStep3Next.addEventListener('click', function(){
    
    if(productStock.value === ''){
        errorPg3.removeAttribute('style');
    }else{
        productCategoryDisable.value = productCategory.value;
        productNameDisable.value = productName.value;
        productInfoDisable.value = productInfo.value;
        productPriceDisable.value = productPrice.value;
        productStockDisable.value = productStock.value;
        productTagsDisable.value = productTags.value;

        step3.style.display = 'none';
        complete.removeAttribute('style');
    }
})


function checkForEmpty(e){
    if(e.value === ''){
        e.parentNode.lastElementChild.removeAttribute('style');
    }else{
        e.parentNode.lastElementChild.style.display = 'none';
    }
}


jQuery(document).ready(function () {
ImgUpload();
});

function ImgUpload() {
var imgWrap = "";
var imgArray = [];

$('.upload__inputfile').each(function () {
    $(this).on('change', function (e) {
    imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
    var maxLength = $(this).attr('data-max_length');

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);
    var iterator = 0;
    filesArr.forEach(function (f, index) {

        if (!f.type.match('image.*')) {
        return;
        }

        if (imgArray.length > maxLength) {
        return false
        } else {
        var len = 0;
        for (var i = 0; i < imgArray.length; i++) {
            if (imgArray[i] !== undefined) {
            len++;
            }
        }
        if (len > maxLength) {
            return false;
        } else {
            imgArray.push(f);

            var reader = new FileReader();
            reader.onload = function (e) {
            var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
            imgWrap.append(html);
            iterator++;
            }
            reader.readAsDataURL(f);
        }
        }
    });
    });
});

$('body').on('click', ".upload__img-close", function (e) {
    var file = $(this).parent().data("file");
    for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].name === file) {
        imgArray.splice(i, 1);
        break;
    }
    }
    $(this).parent().parent().remove();
});
}

const editBtn = document.getElementById('editBtn');

editBtn.addEventListener('click', function(){
    complete.style.display = 'none';
    step1.removeAttribute('style');
})