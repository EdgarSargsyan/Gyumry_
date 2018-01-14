const express = require('express');
const router = express.Router();
const url = require('url')


const Content = require('../model/scemas/schema_contents');
const Menu = Content.Menu;
const Category = Content.Category;
const States = Content.States;
const User = require('../model/scemas/users');


router.get('/oldandnew', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Old and New Gyumri" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru', CatType: "Old and New Gyumri" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy', CatType: "Old and New Gyumri" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Old and New Gyumri" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});


router.get('/churches', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Churches" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru', CatType: "Churches" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy', CatType: "Churches" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Churches" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});


router.get('/famous', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Famous People" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru', CatType: "Famous People" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy', CatType: "Famous People" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Famous People" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});


router.get('/teatre', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Theatre and film" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru', CatType: "Theatre and film" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy', CatType: "Theatre and film" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Theatre and film" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});
router.get('/hotel', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Restaurants and hotels" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru', CatType: "Restaurants and hotels" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy', CatType: "Restaurants and hotels" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Restaurants and hotels" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});


router.get('/traditions', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Traditions" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru', CatType: "Traditions" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy', CatType: "Traditions" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', CatType: "Traditions" }, function (err, doc) {
          if (err) throw err;
          res.render('cat_item', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});






router.get('/traditions/:name', function (req, res, next) {
  console.log(req.params);
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        
        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          console.log(doc)
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});

router.get('/oldandnew/:name', function (req, res, next) {
  console.log(req.params);
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        
        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          console.log(doc)
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});

router.get('/churches/:name', function (req, res, next) {
  console.log(req.params);
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        
        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          console.log(doc)
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});


router.get('/teatre/:name', function (req, res, next) {
  console.log(req.params);
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        
        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          console.log(doc)
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});

router.get('/famous/:name', function (req, res, next) {
  console.log(req.params);
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        
        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          console.log(doc)
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});

router.get('/hotel/:name', function (req, res, next) {
  console.log(req.params);
  switch (req.session.lang) {
    case 'en':  //  for en lang 
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang 

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang 

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        
        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          console.log(doc)
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});
module.exports = router;