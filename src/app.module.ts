import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/typeorm.config.service';
import { Todo } from './todo/entity/todo.entity';
import { Member } from './member/entity/member.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
      }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    TypeOrmModule.forRoot({
      entities: [Member, Todo],
    }),
    TypeOrmModule.forFeature([Member, Todo])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
