import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export interface Response<T> {
  data: T;
  code: number;
}

@Injectable()
export class UserService {
  protected readonly repository: Repository<User>;
  constructor(@InjectRepository(User) repository: Repository<User>) {
    this.repository = repository;
  }
  /**
   * 登录
   * @param username 用户名
   * @param password 密码
   * @returns 用户信息
   */
  async login(username: string, password: string): Promise<Response<User>> {
    const data = await this.repository.findOne({
      where: {
        username,
        password,
      },
    });
    return {
      data,
      code: 0,
    };
  }
  /**
   * 注册
   */
  async register(username: string, password: string): Promise<Response<User>> {
    this.repository.save({
      username,
      password,
    });
    const data = await this.repository.findOne({
      where: {
        username,
      },
    });
    return {
      data,
      code: 0,
    };
  }

  async getUser(): Promise<Response<User[]>> {
    const data = await this.repository.find();
    return {
      data,
      code: 0,
    };
  }

  async createUser(user: User): Promise<Response<User>> {
    const { username } = user;
    await this.repository.save(user);
    const data = await this.repository.findOne({
      where: {
        username,
      },
    });
    return {
      data,
      code: 0,
    };
  }
}
