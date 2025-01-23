import { Module } from '@nestjs/common';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [UserModule],
})
export class TaskModule {}
