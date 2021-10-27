const UserController = require('./controllers/UserController.js');
const UserAuthenController =  require('./controllers/UserAuthenController');
const ProgramController = require('./controllers/ProgramController');
const WinController = require('./controllers/WinController');

const isAuthenController = require('./authen/isAuthenController');

module.exports = (app) => {
    app.post('/user',UserController.create)
    app.put('/user/:userId',UserController.put)
    app.delete('/user/:userId',UserController.remove)
    app.get('/user/:userId',UserController.show)
    app.get('/users',isAuthenController, UserController.index)

    //login
    app.post('/login',UserAuthenController.login)

    //win
    app.post('/win',WinController.create)
    app.put('/win/:winId',WinController.put)
    app.delete('/win/:winId',WinController.remove)
    app.get('/win/:winId',WinController.show)
    app.get('/wins',WinController.index)

    //Program
    app.post('/program',ProgramController.create)
    app.put('/program/:programId',ProgramController.put)
    app.delete('/program/:programId',ProgramController.remove)
    app.get('/program/:programId',ProgramController.show)
    app.get('/programs',ProgramController.index)

}
