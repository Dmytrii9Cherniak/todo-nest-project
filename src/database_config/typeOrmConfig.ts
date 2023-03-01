import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { TasksEntity } from "../entities/tasks.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'QwErTy2020',
  database: 'todoNestApp',
  entities: [UserEntity, TasksEntity],
  synchronize: true,
}
