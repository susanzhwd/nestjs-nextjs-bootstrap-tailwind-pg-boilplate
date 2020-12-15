import { Exclude } from 'class-transformer';
import {
    IsEmail, IsOptional, IsString,
    MaxLength, MinLength
} from 'class-validator';

export class UserDto {
    @MaxLength(255, { always: true })
    @IsEmail({ require_tld: false }, { always: true })
    email!: string;

    @MaxLength(20, { always: true })
    @MinLength(6, { always: true })
    @IsString({ always: true })
    username?: string;

    @IsOptional()
    name?: { first: string, last: string };

}

export class UserCreateDto extends UserDto {
    @MaxLength(20, { always: true })
    @MinLength(6, { always: true })
    @IsString({ always: true })
    password!: string;
}

export class UserGetDto extends UserDto {
    @Exclude()
    password?: string;
}

export class UserLoginDto {
    @IsOptional()
    @IsEmail()
    email!: string;
    @IsOptional()
    @IsString()
    username!: string;
    @IsString()
    password!: string;
  }