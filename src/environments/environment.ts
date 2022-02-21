import { config } from 'dotenv';

config();

export const environment = {
  name: 'development',
  port: 3000,
  mongoUri: 'mongodb://localhost/blocktrust-db',
};
