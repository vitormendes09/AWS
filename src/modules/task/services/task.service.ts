import { Injectable } from '@nestjs/common';
import { Task } from '../entities/task.entity';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  create(task: Task) {
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  delete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
