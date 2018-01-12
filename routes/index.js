const express = require('express');
const router = express.Router();

const Content = require('../model/scemas/schema_contents');
const User = require('../model/scemas/users');


/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.session);
  Content.findOne({}, function (err, docs) {
    if (err) throw err;
    let category = docs.category.categories_en;
    let menu = docs.menu.menu_item_en;
    res.render('index', { title: 'Gyumri', menu: menu, category: category,err:'', user_id: req.session.user_id });
  });
});

router.get('/en', function (req, res, next) {
  req.session.lang = 'en';
  res.redirect('/');
});
router.get('/ru', function (req, res, next) {
  req.session.lang = 'ru';
  res.redirect('/');
});
router.get('/hy', function (req, res, next) {
  req.session.lang = 'hy';
  res.redirect('/');
});

module.exports = router;