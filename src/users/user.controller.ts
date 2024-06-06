import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService, Response } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUser(): Response<String> {
        return this.userService.getUser();
    }

    @Post("login")
    login(@Body() body) {
        return this.userService.login(body.username, body.password)
    }
}
