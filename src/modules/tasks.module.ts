import { Module } from '@nestjs/common';
import { TasksController } from "../controllers/tasks.controller";
import { TasksService } from "../services/tasks.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksEntity } from "../entities/tasks.entity";

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [TypeOrmModule.forFeature([TasksEntity])]
})
export class TasksModule {}
