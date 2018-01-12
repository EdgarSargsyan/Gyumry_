const express = require('express');
const router = express.Router();



const Content = require('../model/scemas/schema_contents');
const User = require('../model/scemas/users');

router.get('/oldandnew', function (req, res, next) {
  // Content.paginate({}, {limit: 1},  function (err, result) {
  //   if (err) throw err;
  //   console.log(result.docs[0].category.categories_en.categories_item1.categories_item_state);
  // });
    // let category = docs.category.categories_en.categories_item1;
    // let menu = docs.menu.menu_item_en;
    // res.render('cat_item', { title: 'Old and New', menu: menu, category: category });
  
   
    // Content.findOne({}, (err, docs) => {
     
      
    //   let category = docs.category.categories_en.categories_item1;
    //   let menu = docs.menu.menu_item_en;
    //   res.render('cat_item', { title: 'Old and New', menu: menu, category: category, user:'' });
    // });
  });

 
module.exports = router;