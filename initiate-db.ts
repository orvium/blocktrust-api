import * as mongoose from 'mongoose';
import { UserDocument, UserSchema } from './src/user/user.schema';

const UserModel = mongoose.model<UserDocument>(UserDocument.name, UserSchema);

const execute = async () => {
  await mongoose.connect(
    'mongodb://localhost:27017/blocktrust-db',
  );

  await UserModel.deleteMany({});

  await UserModel.create({
    firstName: 'John',
    lastName: 'Doe'
  });

  process.exit();
}

execute().then();
