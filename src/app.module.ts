import { Module } from '@nestjs/common';
import { TasksModule } from "./modules/tasks.module";
import { UsersModule } from "./modules/users.module";

@Module({
  imports: [TasksModule, UsersModule],
})
export class AppModule {}
