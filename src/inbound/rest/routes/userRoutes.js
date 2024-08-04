import express from 'express';
import UserController from '../controller/UserController.js';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js';

const router = express.Router();

const middleware = (req, res, next) => {
    next();

}

router.use(middleware);

router.get('/user', new UserController().findAll);
router.post('/user', new UserController().create);
router.patch("/user", new UserController().update);

export default router;
