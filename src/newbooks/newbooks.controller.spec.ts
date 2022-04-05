import { Test, TestingModule } from '@nestjs/testing';
import { NewbooksController } from './newbooks.controller';

describe('NewbooksController', () => {
  let controller: NewbooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewbooksController],
    }).compile();

    controller = module.get<NewbooksController>(NewbooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
