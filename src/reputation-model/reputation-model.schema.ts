import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { UserDocument } from '../user/user.schema';

@Schema({ collection: 'reputation-model', timestamps: true })
export class ReputationModelDocument extends Document {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserDocument',
  })
  creator!: mongoose.Schema.Types.ObjectId | string | UserDocument;
  @Prop({ required: true, trim: true })
  name!: string;
  @Prop({ trim: true })
  description!: string;
  @Prop({ required: true, default: 1 })
  version!: number;
  @Prop({ required: true, trim: true })
  sourceCodeURL!: string;
  @Prop({ trim: true })
  provider!: string;
}

export const ReputationModelSchema = SchemaFactory.createForClass(ReputationModelDocument);
