import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn({type: "int", comment: "Unique guess identifier"})
  id: number;

  @Column({type: "varchar"})
  fullName: string;

  @Column({type: "varchar", unique: true})
  login: string;

  @Column({type: "varchar", unique: true})
  email: string

  @Column({type: "varchar"})
  password: string;

  // @Column({type: "array"})
  // tasks: any[];

}
