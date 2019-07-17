import { logindata, getDownloads, getDownload, updateDownload, deleteDownload } 
from '../controllers/downloadController'
 
const routes = (app) => {
    app.route('/signup')
        .get(getUser)
        .post(addUser)
 
    app.route('/download/:id')
        .get(getUsers)
        .put(updateUser)
        .delete(deleteUser)
}
 
export default routes;