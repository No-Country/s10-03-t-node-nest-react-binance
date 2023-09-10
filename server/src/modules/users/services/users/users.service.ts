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

      // Comprobar que se envió al menos uno de los campos: username, email, celphone
      if (!(username || email || celphone)) {
        return createResponse({
          error: true,
          message: 'Debe enviar al menos username, email, celphone',
        });
      }

      // Comprobar si el username ya existe
      if (username) {
        const existingUserByUsername = await this.usersRepository.findOne({
          where: { username },
        });
        if (existingUserByUsername) {
          return createResponse({
            error: true,
            message: 'El nombre de usuario ya existe',
          });
        }
      }

      // Comprobar si el email ya existe
      if (email) {
        const existingUserByEmail = await this.usersRepository.findOne({
          where: { email },
        });
        if (existingUserByEmail) {
          return createResponse({
            error: true,
            message: 'El email ya está en uso',
          });
        }
      }

      // Comprobar si el celphone ya existe
      if (celphone) {
        const existingUserByCelphone = await this.usersRepository.findOne({
          where: { celphone },
        });
        if (existingUserByCelphone) {
          return createResponse({
            error: true,
            message: 'El número de teléfono celular ya está en uso',
          });
        }
      }

      // Si todo está bien, continua con el proceso de creación del usuario
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const user = new UserEntity();
      user.username = username;
      user.email = email;
      user.celphone = celphone ? celphone : null;
      user.passwordHash = hashedPassword;
      user.balance = createUserDto.balance;

      const data = await this.usersRepository.save(user);
      if (!data) {
        return createResponse({
          error: true,
          message: 'Ocurrió un error',
        });
      }
      return createResponse({
        data: data,
        message: 'Registro Exitoso',
      });
    } catch (error) {
      return createResponse({
        error: true,
        message: `'Ocurrió un error al registrar' ${error}`,
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
