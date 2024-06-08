import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find')
  getUser() {
    return this.userService.getUser();
  }

  @Post('login')
  login(@Body() body) {
    return this.userService.login(body.username, body.password);
  }

  @Post('register')
  register(@Body() body) {
    return this.userService.register(body.username, body.password);
  }

  @Post('create')
  createUser(@Body() body) {
    return this.userService.createUser(body);
  }
}
