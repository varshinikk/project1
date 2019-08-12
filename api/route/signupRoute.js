import { getUser, signup, signin} from '../controllers/signupController'
// import { createLocation } from '../controllers/locationController'
// import { createResturant } from '../controllers/resturantController'
// import { createMenu } from '../controllers/menuController'
var UsersController = require('../controllers/UsersController');
var AdminController=require('../controllers/AdminController');
const { check, validationResult } = require('express-validator/check')

const routes = (app) => {
  //signup
  app.route('/signup')
  .post(signup)
  .get(getUser)
    

  //signin
  app.route('/signin')
    .post(signin)

  // //location
  // app.route('/location')
  //   .post(createLocation)

  // //resturant
  // app.route('/resturant')
  //   .post(createResturant)

  // //menu
  // app.route('/menu')
  // .post(createMenu)
// }
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.post('/signup',UsersController.signup);
// router.post('/login',UsersController.login);

//location
app.post('/location',AdminController.location);
app.get('/getbyLocId/:locationId1',AdminController.getRstByLocId);

//restaurants
app.post('/rst',AdminController.restaurants);
app.get('/getbyRstId/:_id',AdminController.getRstID);

//menu
app.post('/addmenu',AdminController.addMenu);
app.get('/getmenulist/:Rid',AdminController.getmenuDetails);

//food
app.post('/addfood',AdminController.addFood);
app.get('/getfoodlist/:menuid',AdminController.getfoodDetails);

//cart
app.post('/addcart',UsersController.addToCart);
app.get('/getcart',UsersController.getcart);

//order
app.post('/addorder',UsersController.addOrder);
app.get('/getallorderdetails/:userid',UsersController.getallorder);
app.delete('/deleteorder/:foodId',UsersController.deleteorder);
}

export default routes;