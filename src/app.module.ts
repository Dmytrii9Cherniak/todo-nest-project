import { Module } from '@nestjs/common';
import { TasksModule } from "./modules/tasks.module";
import { UsersModule } from "./modules/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./database_config/typeOrmConfig";

@Module({
  imports: [TasksModule, UsersModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
