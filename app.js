// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                               { Requirements by NodeJs START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require("mongoose");
const fs = require("fs");
require("./conn/db");

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                               { Requirements by NodeJs END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@








// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                               { Requirements by APP START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                               { Requirements by APP END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                            { Product Schema and Model START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const techitemScehma = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: Array,
  });
  
  const Techitem = mongoose.model("Techitem", techitemScehma);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                          { Product Schema and Model END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 { APP.GET Home page START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.get('/', function(req, res){

    // Fetch products from API START
    
    // var options = {
    //     method: "GET",
    //     hostname: "dummyjson.com",
    //     path: "/products?limit=100",
    //   };
    //   var req = https.request(options, function (response) {
    //     var chunks = [];
      
    //     response.on("data", function (chunk) {
    //       chunks.push(chunk);
    //     });
      
    //     response.on("end", function (chunk) {
    //       var body = Buffer.concat(chunks);
    //       let body1 = body.toString();
    //       let body2 = JSON.parse(body1);
    //     //   console.log(body1);
    //     //   console.log(body2);      
            
    //       res.render('home', {body2: body2});


    //     });
      
    //     response.on("error", function (error) {
    //       console.error(error);
          
    //     });
    //   });
    
    //   req.end();
    
    // Fetch products from API END
    
    
// var options = {
//     method: "GET",
//     hostname: "fakestoreapi.com",
//     path: "/products",
//   };
//   var req = https.request(options, function (response) {
//     var chunks = [];

//     response.on("data", function (chunk) {
//       chunks.push(chunk);
//     });

//     response.on("end", function (chunk) {
//       var body = Buffer.concat(chunks);
//       let body1 = body.toString();
//       let body2 = JSON.parse(body1);
//       console.log(body1);
//     //   const offers = body2.data.offers;
//     //   console.log(body2);

        
//     });

//     response.on("error", function (error) {
//       console.error(error);
//     //   let error2 = error;
//     //   res.redirect('error', {error2: error2});
//     console.log(error);
//     });
//   });
    
//   req.end();
    


    
    // Fetch products from Database START

      Techitem.find({}, function(err, foundItems){
        if(err){
            console.log(err);
        }else{
            // console.log(foundItems);
            res.render('home', {foundItems: foundItems})
        }
    })

    // Fetch products from Database END  

})


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 { APP.GET Home page END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                            { APP.POST Search bar Autocomplete START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post('/getProducts', async (req, res) => {
    let payload = req.body.payload.trim();
    let search = await Techitem.find({title: {$regex: new RegExp('^'+payload+'.*','i')}}).exec();
    //Limit search result to 10
    search = search.slice(0, 10);
    res.send({payload: search});
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                            { APP.POST Search bar Autocomplete END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 { Search for Products Home page START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post('/search', function(req, res){
    
    let searchedProduct = req.body.searchProduct;
    searchedProduct = searchedProduct.toLowerCase();

    Techitem.find({}, function(err, foundItems){
        
        let foundItemsNew = [];

        if(searchedProduct.length > 0 ){
            if(err){
                console.log(err);
            }else{
                
                

                for(const item of foundItems){
                    
                    if(item.title.toLowerCase().includes(searchedProduct) || item.description.toLowerCase().includes(searchedProduct) || item.category.toLowerCase().includes(searchedProduct)){
                        foundItemsNew.push(item);
                    }
                    
                }
                res.render('products', {foundItemsNew: foundItemsNew})
                // console.log(foundItemsNew);
            }
        }else{

            res.render('products', {foundItemsNew: foundItemsNew});

        }
    })

}); 

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 { Search for Products Home page END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                              { Categories button Home page START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post('/categories', function(req, res){
  
    function findDB(categoryName){
        Techitem.find({category: categoryName}, function(err, foundItemsNew){
            if(err){
                console.log(err);
            }else{
                // console.log(foundItemsNew);
                res.render('products', {foundItemsNew: foundItemsNew})
            }
        })
    }

    
    const category = req.body.btnCategory;
    console.log(category);


    if(category === 'tech'){
        findDB(['smartphones', 'laptops']);
    }else if(category === 'skinCare'){
        findDB(['skincare']);
    }else if(category === 'fragrances'){
        findDB(['fragrances']);
    }else if(category === 'womensDress'){
        findDB(['womens-dresses']);
    }else if(category === 'decor'){
        findDB(['home-decoration']);
    }else if(category === 'shoes'){
        findDB(['mens-shoes', 'womens-shoes']);
    }
    else if(category === 'all'){
        Techitem.find({}, function(err, foundItemsNew){
            if(err){
                console.log(err);
            }else{
                // console.log(foundItems);
                res.render('products', {foundItemsNew: foundItemsNew})
            }
        })   
    }
    else if(category === 'smartphones'){
        findDB(['smartphones']);
    }
    else if(category === 'laptops'){
        findDB(['laptops']);
    }
    else if(category === 'groceries'){
        findDB(['groceries']);
    }
    else if(category === 'furniture'){
        findDB(['furniture']);
    }
    else if(category === 'tops'){
        findDB(['tops']);
    }
    else if(category === 'mensShirts'){
        findDB(['mens-shirts']);
    }
    else if(category === 'mensShoes'){
        findDB(['mens-shoes']);
    }
    else if(category === 'mensWatches'){
        findDB(['mens-watches']);
    }
    else if(category === 'womensWatches'){
        findDB(['womens-watches']);
    }
    else if(category === 'womensBags'){
        findDB(['womens-bags']);
    }
    else if(category === 'womensJewellery'){
        findDB(['womens-jewellery']);
    }
    else if(category === 'sunglasses'){
        findDB(['sunglasses']);
    }
    else if(category === 'automotive'){
        findDB(['automotive']);
    }
    else if(category === 'motorcycle'){
        findDB(['motorcycle']);
    }
    else if(category === 'lighting'){
        findDB(['lighting']);
    }
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                              { Categories button Home page END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                              { Categories button Home page END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post('/product-details', function(req, res){
    const selectedProductID =  req.body.productID;
    const selectedProductCategoroy =  req.body.productCategory;
    // console.log(selectedProductID);


    Techitem.find({category: selectedProductCategoroy}, function(error, foundInfoAll){

        if(error){
            console.log(error)
        }else{
            Techitem.find({_id: selectedProductID}, function(err, foundInfo){
                if(err){
                    console.log(err);
                }else{
                    // console.log(foundInfo[0].raring);
                    // console.log(foudInfoAll[1]._id);
                    res.render('productDetail', {foundInfo: foundInfo, foundInfoAll: foundInfoAll})
                }
            })
        }
    })
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                              { Categories button Home page END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 { APP.GET Home page START }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.listen(3000, function(req, res){
    console.log('Server Started on port 3000');
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 { APP.GET Home page END }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@














