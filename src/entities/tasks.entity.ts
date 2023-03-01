import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class TasksEntity extends BaseEntity {

  @PrimaryGeneratedColumn('increment',{type: "int", comment: "Unique guess identifier",})
  id: number

  @Column({type: "varchar"})
  title: string

  @Column({type: "varchar"})
  description: string;

  @Column({type: "varchar"})
  createdAt: string;

  @Column({type: "boolean"})
  isTaskDone: boolean;

}
