import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { User } from './user/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            synchronize: true,
            migrationsRun: true,
            autoLoadEntities: true
        }),
        UserModule,
        ProductsModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
