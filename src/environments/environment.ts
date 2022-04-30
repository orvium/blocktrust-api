import { config } from 'dotenv';

config();

export const environment = {
  name: 'development',
  port: 3000,
  mongoUri: 'mongodb://localhost/blocktrust-db',
  auth: {
    authority: 'https://sandbox.orcid.org',
    clientId: 'APP-MM8W66XRA9MBJEGX'
  },
};
