import { Task } from 'src/modules/task/entities/task.entity';

export class User {
  id: string;
  name: string;
  email: string;
  tasks: Task[] = [];
}
