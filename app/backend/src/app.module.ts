import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthenticationModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
