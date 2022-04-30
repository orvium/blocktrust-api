import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaperDocument, PaperSchema } from '../paper/paper.schema';
import { UserDocument, UserSchema } from '../user/user.schema';
import { ReviewController } from './review.controller';
import { ReviewDocument, ReviewSchema } from './review.schema';
import { ReviewService } from './review.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PaperDocument.name, schema: PaperSchema },
      { name: UserDocument.name, schema: UserSchema },
      { name: ReviewDocument.name, schema: ReviewSchema },
    ])
  ],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule {
}
