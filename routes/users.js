const express = require('express');
const router = express.Router();

const User = require('../model/scemas/users');
const News = require('../model/scemas/schema_users_news');
const Content = require('../model/scemas/schema_contents');


router.post("/regist", (req, res, next) => {
	let newUser = new User(req.body);
	console.log(newUser);
	newUser.save().then(() => {
		console.log("ok");
		res.send(req.body);
	}).catch((err) => {
		console.log(err);
		res.send(err);
	});
});

router.post("/login", (req, res, next) => {
	let login = req.body.login;
	let password = req.body.pass;
	Content.findOne({}, function (err, docs) {
		if (err) throw err;
		let category = docs.category.categories_en;
		let menu = docs.menu.menu_item_en;
		User.findOne({ "email": `${login}` }, function (err, docs) {
			if (err) throw err;
			if (docs != null) {
				if (docs.checkPassword(password)) {
					req.session.user_id = docs._id
					res.redirect('/');
				}
				else {
					req.session.name = "";
					res.render(`index`, { title: "Registration form", menu: menu, category: category, user_id: '', err: "Incorrect password" });
				}
			} else {
				res.render(`index`, { title: "Registration form", menu: menu, category: category, user_id: '', err: "Incorrect email" });
			}
		})
	});
});

router.get('/exit', (req, res, next) => {
	req.session.destroy((err) => {
		if(err) throw err;
	});
	res.redirect('/');
});

router.post("/addnews", (req, res, next) => {
	let newNews = new News(req.body);
	console.log(newNews);
	newNews.save().then(() => {
		console.log("ok");
		res.send(req.body);
	}).catch((err) => {
		console.log(err);
		res.send(err);
	});
});


module.exports = router;
