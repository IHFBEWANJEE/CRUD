import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/typeorm.config.service';
import { MemberModule } from './member/module/member.module';
import { TodoModule } from './todo/module/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
      }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    MemberModule,
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
