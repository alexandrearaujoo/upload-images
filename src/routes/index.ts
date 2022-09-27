import { Router } from "express";
import multerConfig from "../config/multer";
import UploadController from "../controllers/upload.controller";
import multer from "multer";

const router = Router();
const upload = multer(multerConfig);

router.post("", upload.single('image'), UploadController.create);
router.delete("/:filename", UploadController.delete);

export default router;
