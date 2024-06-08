import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('products') //数据库表名
export class Product {
  @PrimaryGeneratedColumn() id?: number; //主键，自增
  @Column() name: string;
  @Column() description?: string;
  @Column() cover?: string;
}
