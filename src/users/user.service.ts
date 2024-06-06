import { Injectable } from '@nestjs/common';

export interface Response<T> {
    data: T
    code: number
}

export interface User {
    username: string
    password: string
    nickname?: string
    avatar?: string
}

const users: User[] = [
    {
        username: "season",
        password: "admin123",
        nickname: "season",
        avatar: "",
    }
]

@Injectable()
export class UserService {
    login(username: string, password: string): Response<User[]> {
        users.push({
            username,
            password,
        })
        return {
            data: users,
            code: 0
        }
    }
    getUser(): Response<string> {
        return {
            data: "season",
            code: 0
        }
    }
}
