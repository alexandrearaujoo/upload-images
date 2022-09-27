import S3Storage from "../utils/s3Storage";

export const uploadImagesService = async (file: Express.Multer.File) => {
  const s3Storage = new S3Storage();

  await s3Storage.saveFile(file.filename);

  return;
};
