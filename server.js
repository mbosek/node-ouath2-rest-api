var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

var db = require('./db');

var authController = require('./controllers/authorization/auth');
var clientController = require('./controllers/authorization/client');
var oauth2Controller = require('./controllers/authorization/oauth2');

var beerController = require('./controllers/beer');
var userController = require('./controllers/user');

var app = express();

//app.use(bodyParser.urlencoded({
//    extended: true
//}));

app.use(bodyParser.json())

app.use(session({
    secret: '!2#4%6&8(0',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.set('view engine', 'ejs');

var router = express.Router();

router.route('/oauth2/authorize')
    .get(authController.isAuthenticated, oauth2Controller.authorization)
    .post(authController.isAuthenticated, oauth2Controller.decision);

router.route('/oauth2/token')
    .post(authController.isClientAuthenticated, oauth2Controller.token);

router.route('/clients')
    .post(authController.isAuthenticated, clientController.postClients)
    .get(authController.isAuthenticated, clientController.getClients);

router.route('/users')
    .post(userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);
    
router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

router.route('/beers')
    .post(authController.isAuthenticated, beerController.postBeers)
    .get(authController.isAuthenticated, beerController.getBeers)


router.route('/beers/:beer_id')
    .get(authController.isAuthenticated, beerController.getBeer)
    .put(authController.isAuthenticated, beerController.putBeer)
    .delete(authController.isAuthenticated, beerController.deleteBeer);

app.use('/api', router);

var port = 3000;

app.listen(port, function () {
    console.log('Server is working on port ', port);
});
