import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { USER_TYPE } from '../enums/user-type.enum';

@Schema({ collection: 'user', timestamps: true })
export class UserDocument extends Document {
  @Prop({ trim: true }) sub?: string;
  @Prop({ trim: true }) firstName?: string;
  @Prop({ trim: true }) lastName?: string;
  @Prop({ unique: true, sparse: true, trim: true, lowercase: true })
  email?: string;
  @Prop({ trim: true }) aboutMe?: string;
  @Prop({ trim: true }) orcid?: string;
  @Prop({ trim: true }) linkedin?: string;
  @Prop({ trim: true }) blog?: string;
  @Prop({ trim: true }) role?: string;
  @Prop({ required: true, default: [] })
  starredPapers!: string[];
  @Prop({ required: true, default: false })
  isOnboarded!: boolean;
  @Prop({ required: true, default: false })
  acceptedTC!: boolean;
  @Prop({ required: true, default: [] })
  disciplines!: string[];
  @Prop({
    required: true,
    enum: Object.values(USER_TYPE),
    default: USER_TYPE.citizen
  })
  userType!: USER_TYPE;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
