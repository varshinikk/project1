import { getUser, addUser, getUsers, updateUser, deleteUser, signup, signin, createUser } from '../controllers/signupController'
import { createLocation } from '../controllers/locationController'
import { createResturant } from '../controllers/resturantController'
import { createMenu } from '../controllers/menuController'
const { check, validationResult } = require('express-validator/check')

const routes = (app) => {
  //signup
  app.route('/signup')
  .post(signup)
    .get(getUser)
    

  //signin
  app.route('/signin')
    .post(signin)

  //location
  app.route('/location')
    .post(createLocation)

  //resturant
  app.route('/resturant')
    .post(createResturant)

  //menu
  app.route('/menu')
  .post(createMenu)
}
export default routes;