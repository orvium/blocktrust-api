import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDocument, UserSchema } from '../user/user.schema';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ])
  ],
  providers: [AuthenticationService, UserService],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {
}
