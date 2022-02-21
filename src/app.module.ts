import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { environment } from './environments/environment';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PaperModule } from './paper/paper.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        ENVIRONMENT: Joi.required().default('development'),
        MONGO_URI: Joi.required().default('mongodb://localhost/blocktrust-db'),
      }),
    }),
    MongooseModule.forRoot(
      environment.mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    UserModule,
    PaperModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
