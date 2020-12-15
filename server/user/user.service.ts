import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import bcrypt from 'bcrypt';
import { DeepPartial, Repository } from 'typeorm';
import { SocialProfile } from '../auth/auth.interface';
import { UserCreateDto, UserLoginDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    super(userRepository);
  }

  async findByLogin(userLogin: UserLoginDto): Promise<User> {
    const { email, username, password } = userLogin;
    const user = await this.userRepository.findOne({ where: [{ email }, { username }] })

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords    
    const areEqual = bcrypt.compareSync(password, user.password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findByEmailOrUsername(email: string, username: string): Promise<User | undefined> {
    if (username) {
      return await this.userRepository.findOne({ where: { username } });
    } else {
      return await this.userRepository.findOne({ where: { email } });
    }
  }

  async createUser(user: UserCreateDto): Promise<User | undefined> {
    const userEntity = this.userRepository.create(user);
    return await this.userRepository.save(userEntity);
  }

  async findOrCreateSocialUser(profile: SocialProfile): Promise<User> {
    const user = await this.userRepository
      .findOne({ where: { [profile.provider]: { id: profile.id } } });
    if (user) {
      return user;
    }
    const createUser: DeepPartial<User> = {
      email: profile.emails[0].value,
      name: { first: profile.name.givenName, last: profile.name.familyName },
      [profile.provider]: {
        id: profile.id,
        avatar: profile.photos ? profile.photos[0].value : (profile as any)._json.picture,
      },
    }
    const userEntity = this.userRepository.create(createUser);
    return this.userRepository.save(userEntity);
  }

  // async findOrCreateGoogleUser(profile: GoogleProfile): Promise<User> {
  //   const user = await this.userRepository
  //     .findOne({ where: { facebook: { id: profile.id } } });
  //   if (user) {
  //     return user;
  //   }
  //   const createUser: DeepPartial<User> = {
  //     email: profile.emails[0].value,
  //     name: { first: profile.name.givenName, last: profile.name.familyName },
  //     facebook: {
  //       id: profile.id,
  //       avatar: profile.photos[0].value,
  //     },
  //   }
  //   const userEntity = this.userRepository.create(createUser);
  //   return this.userRepository.save(userEntity);
  // }
}
