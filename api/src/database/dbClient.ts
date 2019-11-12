import Knex from 'knex';
import { config } from '../config';

let _instance: Knex;

export const getDbClientInstance = () => _instance || (_instance = Knex(config.database));
