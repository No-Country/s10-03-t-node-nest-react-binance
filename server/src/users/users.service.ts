// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: User) {
    return await this.userRepository.save(user);
  }

  async getUsers() {
    return await this.userRepository.find();
  }

  async getUserById(id: number) {
    return await this.userRepository.findOneOrFail({
      where: { id },
    });
  }

  async updateUser(id: number, updates: Partial<User>) {
    await this.userRepository.update(id, updates);
    return await this.getUserById(id);
  }

  async deleteUser(id: number) {
    const user = await this.getUserById(id);
    if (user) {
      await this.userRepository.delete(id);
      return user;
    }
    return null;
  }
}
