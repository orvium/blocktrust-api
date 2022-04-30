import * as mongoose from 'mongoose';
import { PaperDocument, PaperSchema } from './src/paper/paper.schema';
import { ReputationModelDocument, ReputationModelSchema } from './src/reputation-model/reputation-model.schema';
import { ReviewDocument, ReviewSchema } from './src/review/review.schema';
import { UserDocument, UserSchema } from './src/user/user.schema';
import { ScoringDocument, ScoringSchema } from './src/scoring/scoring.schema';

const UserModel = mongoose.model<UserDocument>(UserDocument.name, UserSchema);
const PaperModel = mongoose.model<PaperDocument>(PaperDocument.name, PaperSchema);
const ReviewModel = mongoose.model<ReviewDocument>(ReviewDocument.name, ReviewSchema);
const ReputationModel = mongoose.model<ReputationModelDocument>(ReputationModelDocument.name, ReputationModelSchema);
const ScoringModel = mongoose.model<ScoringDocument>(ScoringDocument.name, ScoringSchema);

const execute = async () => {
  await mongoose.connect(
    'mongodb://localhost:27017/blocktrust-db',
  );

  // await UserModel.deleteMany({});
  // await PaperModel.deleteMany({});
  // await ReviewModel.deleteMany({});
  // await ReputationModel.deleteMany({});

  const user = await UserModel.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@orvium.io'
  });

  const paper = await PaperModel.create({
    title: 'Paper example',
    creator: user._id,
    keywords: ['study'],
    abstract: 'some abstract text',
    disciplines: ['medicine']
  });

  const review = await ReviewModel.create({
    title: 'Review of Paper example',
    creator: user._id,
    paper: paper._id
  });

  const rm = await ReputationModel.create({
    creator: user._id,
    name: 'Basic reputation model',
    sourceCodeURL: ''
  });

  await ScoringModel.create({
      paper: paper._id,
      reputationModel: rm._id,
      score: 10,
      timestamp: new Date()
    }
  );

  process.exit();
};

execute().then();
