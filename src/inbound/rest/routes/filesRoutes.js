import express from 'express';
import FileController from '../controller/FileController.js';
import multer from 'multer';
import XlsxController from '../controller/XlsxController.js';

const router = express.Router();
const middleware = (req, res, next) => {
    next();
}

const upload = multer({ storage: multer.memoryStorage() });

router.use(middleware);

router.post('/file',  upload.single('filename'), new FileController().postFile);
router.get('/file', new FileController().getFile);
router.get("/exportar", new XlsxController().generateXLSX);

export default router;
