import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Task } from 'src/modules/task/entities/task.entity';

@Injectable()
export class UserService {
  private users: User[] = [];
  create(user: User) {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  delete(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  addTaskToUser(userId: string, task: Task) {
    const user = this.findOne(userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.tasks.push(task);
    return user;
  }

  getUserTasks(userId: string) {
    const user = this.findOne(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user.tasks;
  }
}
