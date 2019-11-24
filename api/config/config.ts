import { join } from 'path';
const getEnvString = (name: string, defaultValue?: string): string => {
    const value = process.env[name];
    /* Will catch empty strings, null, and undefined */
    if (!value) {
        if (defaultValue) {
            return defaultValue;
        }
    } else {
        return value;
    }
    throw Error(`Required environment variable ${name} missing!`);
};

const getEnvNumber = (name: string, defaultValue?: string): number => parseInt(getEnvString(name, defaultValue), 10);
const getEnvBoolean = (name: string, defaultValue?: string): boolean => {
    if (getEnvString(name, defaultValue).toLowerCase() === 'true') {
        return true;
    }
    if (getEnvString(name, defaultValue).toLowerCase() === 'false') {
        return false;
    }
    const msg = `Environment variable ${name} could not be read as 'true' or 'false'.`;
    // tslint:disable-next-line no-console
    console.error(msg);
    throw new Error(msg);
};

export const config = {
    serverPort: getEnvNumber('SERVER_PORT', '8000'),
    database: {
        client: 'pg',
        connection: {
            host: getEnvString('DATABASE_HOST', 'localhost'),
            user: getEnvString('DATABASE_USER'),
            password: getEnvString('DATABASE_PASSWORD'),
            database: getEnvString('DATABASE_NAME'),
        },
        migrations: {
            directory: join(__dirname, '../', 'src', 'database', 'migrations'),
            tableName: 'migrations',
        },
    },
};
