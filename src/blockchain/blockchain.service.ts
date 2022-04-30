import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocumentDefinition, FilterQuery, Model } from 'mongoose';
import { BlockchainNetworkDocument } from './blockchain.schema';

@Injectable()
export class BlockchainService {
  constructor(@InjectModel(BlockchainNetworkDocument.name) private blockchainNetworkModel: Model<BlockchainNetworkDocument>) {
  }

  async find(filter: FilterQuery<BlockchainNetworkDocument>): Promise<BlockchainNetworkDocument[]> {
    return this.blockchainNetworkModel.find(filter).lean();
  }

  async create(rawJson: DocumentDefinition<BlockchainNetworkDocument>): Promise<BlockchainNetworkDocument> {
    const blockchainNetwork = new this.blockchainNetworkModel(rawJson);
    return blockchainNetwork.save();
  }

  model(): Model<BlockchainNetworkDocument> {
    return this.blockchainNetworkModel;
  }
}
