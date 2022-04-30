import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDocument, UserSchema } from '../user/user.schema';
import { ReputationModelController } from './reputation-model.controller';
import { ReputationModelDocument, ReputationModelSchema } from './reputation-model.schema';
import { ReputationModelService } from './reputation-model.service';
import { ScoringService } from '../scoring/scoring.service';
import { ScoringDocument, ScoringSchema } from '../scoring/scoring.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReputationModelDocument.name, schema: ReputationModelSchema },
      { name: ScoringDocument.name, schema: ScoringSchema },
      { name: UserDocument.name, schema: UserSchema },
    ])
  ],
  controllers: [ReputationModelController],
  providers: [ReputationModelService, ScoringService]
})
export class ReputationModelModule {
}
