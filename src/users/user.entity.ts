import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users') //数据库表名
export class User {
    @PrimaryGeneratedColumn() id?: number; //主键，自增
    @Column() username: string;
    @Column() password?: string;
    @Column() nickname?: string;
    @Column() avatar?: string;
}