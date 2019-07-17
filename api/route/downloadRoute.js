import { getUser, addUser, getUsers, updateUser, deleteUser } 
from '../controllers/downloadController'
 
const routes = (app) => {
    app.route('/signup')
        .get(getUser)
        .post(addUser)
 
    app.route('/signup/:id')
        .get(getUsers)
        .put(updateUser)
        .delete(deleteUser)
}
export default routes;