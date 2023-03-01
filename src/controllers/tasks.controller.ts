import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TasksService } from "../services/tasks.service";
import { TaskModel } from "../models/task.model";

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @Get()
  public getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  public getDifferentUser(@Param('id') id: number) {
    return this.tasksService.getDifferentTask(id);
  }

  @Post()
  public createNewTask(@Body() task: TaskModel) {
    return this.tasksService.createNewTask(task);
  }

  @Put(':id')
  public updateExistsUser(@Param('id') id: string, @Body() task: TaskModel) {
    return this.tasksService.updateExistsUser(Number(id), task)
  }

  @Delete(':id')
  public deleteExistsUser(@Param('id') id: string) {
    return this.tasksService.deleteExistsTask(Number(id))
  }

}
