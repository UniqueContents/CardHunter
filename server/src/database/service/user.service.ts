import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from 'src/router/login/dto/login.dto';
import { User, UserDocument } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(userEntity: User) {
    const createdUser = new this.userModel(userEntity);
    return createdUser.save();
  }

  async findOne(loginDto: LoginDto) {
    return this.userModel.findOne(loginDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
