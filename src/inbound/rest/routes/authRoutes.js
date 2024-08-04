import express from 'express';
import AuthController from '../controller/AuthController.js';

const router = express.Router();
const middleware = (req, res, next) => {
    next();
}

router.use(middleware);

router.post('/login', new AuthController().login);
router.post('/refresh', new AuthController().refreshToken);

export default router;
