import { getUser, addUser, getUsers, updateUser, deleteUser, Signup, signin, createUser } from '../controllers/signupController'
const { check, validationResult } = require('express-validator/check')

const routes = (app) => {
  app.route('/signup')
    .get(getUser)
    .post(Signup)

  app.route('/signin')
    .post(signin)

  app.route('/location')
    .post(createUser)
}
export default routes;