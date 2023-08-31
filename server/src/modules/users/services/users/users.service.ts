// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entity/users.entity';
import { CreateUserDTO, UpdateUserDTO } from '../../dto/users.dto';
import * as bcrypt from 'bcrypt';
import { createResponse } from 'src/core/utils/response.util';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  async createUser(createUserDto: CreateUserDTO) {
    try {
      const { username, email, celphone } = createUserDto;
      if (!(username || email || celphone)) {
        return createResponse({
          error: false,
          message: 'Debe enviar al menos username, email, celphone',
        });
      }
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10); // 1 es el número de rondas de salting, puedes ajustarlo si lo prefieres
      const user = new UserEntity();
      user.username = createUserDto.username;
      user.email = createUserDto.email;
      user.passwordHash = hashedPassword;
      user.balance = createUserDto.balance;
      const data = await this.usersRepository.save(user);
      return createResponse({
        data: data,
        message: 'Registro Exitoso',
      });
    } catch (error) {
      return createResponse({
        error: error,
        message: 'Ocurrio un error al registrar',
      });
    }
  }

  async update(id: number, user: UpdateUserDTO) {
    await this.usersRepository.update(id, user);
    return this.usersRepository.findOne({ where: { id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findOneByUsername(username: string) {
    return await this.usersRepository.findOne({ where: { username } });
  }

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOne({ where: { email } });
  }
}
