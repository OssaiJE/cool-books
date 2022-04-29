import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateSwapDto } from './dto/create-swap.dto';

@Injectable()
export class BookService {
  constructor(@Inject('BOOKSERVICE') private readonly bookClient: ClientProxy);

  async createSwap(createSwap: CreateSwapDto) {}
}
