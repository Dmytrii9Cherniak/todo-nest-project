import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { TasksService } from "../services/tasks.service";
import { TasksEntity } from "../entities/tasks.entity";

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @Get()
  public async getAllTasks() {
    const tasks = await this.tasksService.getAllTasks();
    return {
      statusCode: HttpStatus.OK,
      message: 'Tasks fetched successfully',
      tasks: tasks
    }
  }

  @Get(':id')
  public async getDifferentUser(@Param('id') id: number) {
    let task = await this.tasksService.getDifferentTask(id);
    return {
      statusCode: HttpStatus.OK,
      message: task ? 'Task was found' : 'No Task found',
      task: task
    }
  }

  @Post()
  public async createNewTask(@Body() task: TasksEntity) {
    let newCreatedTask = await this.tasksService.createNewTask(task);
    return {
      statusCode: HttpStatus.CREATED,
      message: newCreatedTask ? 'Task created successfully' : 'Something went wrong',
      task: newCreatedTask
    }
  }

  @Put(':id')
  public async updateExistsUser(@Param('id') id: string, @Body() task: TasksEntity) {
    await this.tasksService.updateExistsUser(Number(id), task);
    return {
      statusCode: HttpStatus.OK,
      message: task ? 'Task edited successfully' : 'No task found',
    }
  }

  @Delete(':id')
  public async deleteExistsUser(@Param('id') id: string) {
    let task = await this.tasksService.deleteExistsTask(Number(id))
    return {
      statusCode: HttpStatus.OK,
      message: task ? 'Task deleted successfully' : 'No task found',
    }
  }

}
