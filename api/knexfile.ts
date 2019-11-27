/* Load in env vars that config needs */
const dotenv = require('dotenv');
dotenv.config();
import { config } from './src/config/config';

module.exports = config.database;
