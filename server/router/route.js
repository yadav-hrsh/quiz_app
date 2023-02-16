import {Router} from 'express';
import * as Controller from '../controllers/controller.js'
const router = Router();

router.route('/questions')
    .get(Controller.getQuestions)
    .post(Controller.inserQuestion)
    .delete(Controller.dropQuestion)

router.route('/result')
    .get(Controller.getResult)
    .post(Controller.storeResult)
    .delete(Controller.dropResult)


export default router