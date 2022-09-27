import { Request, Response } from "express";
import { deleteImageService } from "../services/deleteImage.service";
import { uploadImagesService } from "../services/uploadImages.service";

class UploadController {
  static async create(req: Request, res: Response) {
    try {
      const { file } = req;

      if (!file) return;

      await uploadImagesService(file);

      return res.status(201).json({ message: "Imagem enviada" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  }
  static async delete(req: Request, res: Response) {
    const { filename } = req.params;

    await deleteImageService(filename);

    return res.status(204).json();
  }
}

export default UploadController;
