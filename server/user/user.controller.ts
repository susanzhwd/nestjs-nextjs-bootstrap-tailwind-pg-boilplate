import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController
} from '@nestjsx/crud';
import { UserCreateDto, UserDto, UserGetDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';


@Crud({
  model: {
    type: UserDto,
  },
  dto: {
    create: UserCreateDto
  },
  serialize: {
    get: UserGetDto,
    getMany: UserGetDto
  }
})
@Controller()
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
