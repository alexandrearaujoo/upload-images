import S3Storage from "../utils/s3Storage";

export const deleteImageService = async (filename: string) => {
  const s3Storage = new S3Storage();

  await s3Storage.deleteFile(filename);

  return;
};
