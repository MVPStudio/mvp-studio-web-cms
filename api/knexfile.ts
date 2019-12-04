/* Load in env vars that config needs */
import dotenv from 'dotenv';
dotenv.config();
import { config } from './src/config/config';

module.exports = config.database;
