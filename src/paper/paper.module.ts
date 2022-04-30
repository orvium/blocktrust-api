import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewDocument, ReviewSchema } from '../review/review.schema';
import { UserDocument, UserSchema } from '../user/user.schema';
import { PaperController } from './paper.controller';
import { PaperDocument, PaperSchema } from './paper.schema';
import { PaperService } from './paper.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PaperDocument.name, schema: PaperSchema },
      { name: UserDocument.name, schema: UserSchema },
      { name: ReviewDocument.name, schema: ReviewSchema },
    ])
  ],
  controllers: [PaperController],
  providers: [PaperService]
})
export class PaperModule {
}
