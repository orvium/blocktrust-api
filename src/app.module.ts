import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { environment } from './environments/environment';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PaperModule } from './paper/paper.module';
import { ReviewModule } from './review/review.module';
import { ReputationModelModule } from './reputation-model/reputation-model.module';
import { AuthenticationModule } from './authentication/authentication.module';
import * as Joi from 'joi';
import { MulterModule } from '@nestjs/platform-express';
import { ScoringModule } from './scoring/scoring.module';
import { BlockchainModule } from './blockchain/blockchain.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      environment.mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    MulterModule.register({
      dest: './files',
    }),
    UserModule,
    PaperModule,
    ReviewModule,
    ReputationModelModule,
    AuthenticationModule,
    ScoringModule,
    BlockchainModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
