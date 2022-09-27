import aws, { S3 } from "aws-sdk";
import path from "path";
import mime from "mime";
import fs from "fs/promises";
import multerConfig from "../config/multer";

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: "us-east-1",
      credentials: {
        accessKeyId: String(process.env.AWS_ID),
        secretAccessKey: String(process.env.AWS_SECRET_KEY),
      },
    });
  }

  async saveFile(filename: string) {
    const originalPath = path.resolve(multerConfig.directory, filename);

    const contentType = mime.getType(originalPath);

    if (!contentType) throw new Error("File not found");

    const fileContent = await fs.readFile(originalPath);

    this.client
      .putObject({
        Bucket: "upload-with-node",
        Key: filename,
        ACL: "public-read",
        Body: fileContent,
        ContentType: contentType,
      })
      .promise();

    await fs.unlink(originalPath);
  }

  async deleteFile(filename: string) {
    this.client
      .deleteObject({
        Bucket: "upload-with-node",
        Key: filename,
      })
      .promise();
  }
}

export default S3Storage;
