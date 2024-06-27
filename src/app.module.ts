import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmConfigService} from './config/typeorm.config.service';
import {MemberModule} from './member/module/member.module';
import {TodoModule} from './todo/module/todo.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {ProductModule} from "./product/module/product.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigService
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            autoSchemaFile: true,
            // typePaths: ['./**/*.graphql'], // 스키마 우선 접근 방식
            // definitions: {
            //     path: `${process.cwd()}/src/graphql.ts`, // GraphQL SDL 유형에 해당하는 Typescript 정의
            //     //outputAs: 'class' 기본적으로 생성된 모든 Typescript 유형은 인터페이스. 대신 클래스로 생성하려면 이와 같이
            // },
            // plugins: [ApolloServerPluginLandingPageLocalDefault()] // Apollo SandBox
        }),
        MemberModule,
        TodoModule,
        ProductModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
