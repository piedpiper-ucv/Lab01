const Imap = require('imap'),
	inspect = require('util').inspect; 
	
module.exports = (app) => {

	// index routes
	app.get('/', (req, res) => {
		res.render('index');
	});

	//login view
	app.get('/login', (req, res) => {
		res.render('login.ejs');
	});

	app.post('/login', (req, res) =>  {
		console.log(req.body);
		var imap = new Imap({
			user: req.body.email,
			password: req.body.password, 
			host: 'imap.gmail.com', 
			port: 993,
			tls: true
		});
		imap.connect();
	
		  
	});

	// signup view
	app.get('/signup', (req, res) => {
		res.render('signup');
	});


	//profile view
	app.get('/profile', (req, res) => {
		res.render('profile', {
			user: {email:'adasdad'}
		});
	});

	// logout
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}