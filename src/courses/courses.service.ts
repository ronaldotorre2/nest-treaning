import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCourseDto: CreateCourseDto & { partnerId: number }) {
    return await this.prismaService.course.create({
      data: {
        name: createCourseDto.name,
        description: createCourseDto.description,
        active: createCourseDto.active,
        partnerId: createCourseDto.partnerId,
      },
    });
  }

  findAll() {
    return this.prismaService.course.findMany();
  }

  findOne(id: number) {
    return this.prismaService.course.findFirst({
      where: { id: id },
    });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
