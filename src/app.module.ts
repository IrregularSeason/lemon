import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { CommitsModule } from './commits/commits.module';
import { OdersModule } from './oders/oders.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/uploaded'),
      serveRoot: '/static',
    }),
    UserModule,
    UploadModule,
    ProductsModule,
    CommitsModule,
    OdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
