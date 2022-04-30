import { BlockchainService } from './blockchain.service';
import { Test, TestingModule } from '@nestjs/testing';
import { BlockchainNetworkDocument, BlockchainNetworkSchema } from './blockchain.schema';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { BlockchainController } from './blockchain.controller';
import { Connection } from 'mongoose';

describe('BlockchainService', () => {
  let controller: BlockchainController;
  let service: BlockchainService;
  let connection: Connection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockchainService],
      controllers: [BlockchainController],
      imports: [
        MongooseModule.forRoot(environment.test.mongoUri),
        MongooseModule.forFeature([{ name: BlockchainNetworkDocument.name, schema: BlockchainNetworkSchema }]),
      ],
    }).compile();

    controller = module.get<BlockchainController>(BlockchainController);
    service = module.get<BlockchainService>(BlockchainService);

    // Empty the collection before each test
    await service.model().deleteMany({});

    connection = await module.get(getConnectionToken());
  });

  afterEach(async () => {
    await connection.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should get blockchain configurations', async () => {
    await service.create({
      'name': 'ropsten',
      'displayName': 'Ropsten',
      'networkId': 3,
      'appAddress': '0x992419b34A8ec785E07842804878d6d799f8Eaac',
      'escrowAddress': '0x0C1FAB9103564258F7173f5849BcB433Cf5513B2',
      'tokenAddress': '0x45B89a627AF99DcCdF25a03F6f4986F55e9EB491',
      'explorerUrl': 'https://ropsten.etherscan.io/tx/',
    });
    const blockchainNetworkDTOS = await controller.findAll();
    expect(blockchainNetworkDTOS.length).toBe(1);
    expect(blockchainNetworkDTOS[0].name).toBe('ropsten');
  });

});
