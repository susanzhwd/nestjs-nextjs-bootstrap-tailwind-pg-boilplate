
import { CrudValidationGroups } from '@nestjsx/crud';
import bcrypt from 'bcrypt';
import { Type } from 'class-transformer';
import {
  IsEmail, IsNotEmpty, IsOptional,
  IsString
} from 'class-validator';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { BaseEntity } from '../base-entity';

const { CREATE, UPDATE } = CrudValidationGroups;

export class Name {
  @IsString({ always: true })
  @Column({ nullable: true })
  first!: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  last!: string;
}

export class Social {
  @IsString({ always: true })
  @Column({ nullable: true })
  id: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  avatar: string;
}

@Entity('users')
export class User extends BaseEntity {
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, Number(process.env.HASH_SALT));
    }
  }

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsEmail({ require_tld: false }, { always: true })
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email!: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 20, unique: true, nullable: true })
  username?: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 1024, nullable: true })
  password?: string;

  @Type((t) => Name)
  @Column((type) => Name)
  name?: Name;

  @Type((t) => Social)
  @Column((type) => Social)
  facebook?: Social;

  @Type((t) => Social)
  @Column((type) => Social)
  google?: Social;

  @Type((t) => Social)
  @Column((type) => Social)
  twitter?: Social;
}

