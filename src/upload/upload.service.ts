import { Injectable, Req, UploadedFile } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UploadService {
  constructor() {}
  async updateAvatar(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    file.path = `${process.env.HOST}/static/${file.filename}`;
    req;
    return file;
  }
  async updateImage(@UploadedFile() file: Express.Multer.File) {
    file.path = `${process.env.HOST}/static/${file.filename}`;
    return file;
  }
  async uploadImages(@UploadedFile() files: Array<Express.Multer.File>) {
    return files.map((file) => {
      file.path = `${process.env.HOST}/static/${file.filename}`;
      return file;
    });
  }
}
