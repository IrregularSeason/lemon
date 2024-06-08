import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Repository } from 'typeorm';

@Module({
  imports: [
    // 配置数据源
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'lemon',
      autoLoadEntities: true,
      synchronize: false,
    }),
    // 引入实体 required
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService, Repository],
  exports: [UserService],
})
export class UserModule {}
