import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { Task } from '../entities/task.entity';
import { UserService } from '../../user/services/user.service';
import { CreateTaskDto } from '../dtos/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly userService: UserService,
  ) {}

  @Post(':userId')
  create(
    @Param('userId') userId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    const task = new Task();
    Object.assign(task, createTaskDto);
    task.userId = userId;
    const createdTask = this.taskService.create(task);
    this.userService.addTaskToUser(userId, createdTask);
    return createdTask;
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.taskService.delete(id);
  }
}
