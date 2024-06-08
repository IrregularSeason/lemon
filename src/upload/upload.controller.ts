import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  uploadAvatar(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    return this.uploadService.updateAvatar(file, req);
  }
  @Post('image')
  @UseInterceptors(FileInterceptor('image'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.updateImage(file);
  }
}
