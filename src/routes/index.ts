import { Router } from "express";
import UploadController from "../controllers/upload.controller";

const router = Router()

router.post('/', UploadController.create)
router.delete('/:filename', UploadController.delete)


export default router