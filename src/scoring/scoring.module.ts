import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReputationModelDocument, ReputationModelSchema } from '../reputation-model/reputation-model.schema';
import { PaperDocument, PaperSchema } from '../paper/paper.schema';
import { ScoringController } from './scoring.controller';
import { ScoringService } from './scoring.service';
import { ScoringDocument, ScoringSchema } from './scoring.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReputationModelDocument.name, schema: ReputationModelSchema },
      { name: PaperDocument.name, schema: PaperSchema },
      { name: ScoringDocument.name, schema: ScoringSchema },
    ])
  ],
  controllers: [ScoringController],
  providers: [ScoringService],
})
export class ScoringModule {
}
