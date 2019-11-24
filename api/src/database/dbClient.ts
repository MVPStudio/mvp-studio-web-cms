import Knex from 'knex';
import { config } from '../../config/config';

let _instance: Knex;

/* Lazy initialization. DB Client is not created until it is needed. */
export const getDbClientInstance = () => _instance || (_instance = Knex(config.database));
