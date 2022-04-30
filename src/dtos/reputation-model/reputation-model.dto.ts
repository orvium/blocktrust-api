export class ReputationModelDTO {
  _id!: string;
  creator!: string;
  name!: string;
  description!: string;
  version!: number;
  sourceCodeURL!: string;
  provider!: string;
  createdAt: Date;
  updatedAt: Date;
}
