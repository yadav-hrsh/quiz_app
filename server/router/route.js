import {Router} from 'express';
import * as Controller from '../controllers/controller.js'
import authenticate from '../middleware/Authenticate.js';
const router = Router();

router.get('/api/questions/:subject',Controller.getQuestions)
router.route('/api/questions')
    .post(Controller.inserQuestion)
    .delete(Controller.dropQuestion)

router.route('/api/result')
    .post(Controller.storeResult)
    .delete(Controller.dropResult)

router.route('/api/result/:email').get(Controller.getResult)
router.route('/api/register').post(Controller.Regsiter);
router.route('/api/login').post(Controller.login);
router.get('/api/userdata',authenticate,Controller.userdata);

export default router