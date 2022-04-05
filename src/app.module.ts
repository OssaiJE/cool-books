import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { NewbooksController } from './newbooks/newbooks.controller';
import { MarketplaceController } from './marketplace/marketplace.controller';
import { ProposalsController } from './proposals/proposals.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, NewbooksController, MarketplaceController, ProposalsController],
  providers: [AppService],
})
export class AppModule {}
