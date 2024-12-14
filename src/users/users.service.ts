import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { hashPasswordHelper } from 'src/helpers/util';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) 
  private userModal: Model<User>) { }

  isEmailExisting = async (email: string) => {
    const user = await this.userModal.exists({email})
    if (user) {
      return true
    }
    return false
  }

  async create(createUserDto: CreateUserDto) {
    const {name, password, email} = createUserDto
    const isExistEmail = await this.isEmailExisting(email)
    if (isExistEmail) {
      throw new BadRequestException('Email is existed. Please use different email !') 
    }
    //hash password
    const hashPassword = await hashPasswordHelper(password)
    const user = await this.userModal.create({
      name,email, password: hashPassword
    })
    return {
      id: user._id
    }
  }

  async findAll(query: string, current: number, pageSize: number) {
    const {filter,sort} = aqp(query)
    if (!current)  current = 1
    if (!pageSize) pageSize = 10

    if (filter.current) delete filter.current
    if (filter.pageSize) delete filter.pageSize

    const totalItems = (await this.userModal.find(filter)).length
    const totalPages = Math.ceil(totalItems / pageSize)
    const skip = (current - 1) * pageSize
    const res = await this.userModal
    .find(filter)
    .limit(pageSize)
    .select('-password')
    .skip(skip)
    .sort(sort as any)

    return {res, totalPages}
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
