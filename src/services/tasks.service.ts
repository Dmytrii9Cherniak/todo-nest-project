import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TasksEntity } from "../entities/tasks.entity";
import { Repository } from "typeorm";
import { TaskModel } from "../models/task.model";

@Injectable()
export class TasksService {

  constructor(@InjectRepository(TasksEntity) private tasksRepository: Repository<TasksEntity>) {}

  public getAllTasks() {
    return this.tasksRepository.find();
  }

  public getDifferentTask(id: number) {
    return this.tasksRepository.findOne({where: {id}})
  }

  public createNewTask(task: TaskModel) {
    return this.tasksRepository.save(task)
  }

  public updateExistsUser(id: number, task: TaskModel) {
    return this.tasksRepository.update(id, task);
  }

  public deleteExistsTask(id: number) {
    return this.tasksRepository.delete(id)
  }

}
