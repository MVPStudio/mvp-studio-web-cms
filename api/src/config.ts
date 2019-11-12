const getEnvString = (name: string): string => process.env[name] || '';
const getEnvNumber = (name: string): number => parseInt(getEnvString(name), 10);
const getEnvBoolean = (name: string): boolean => getEnvString(name) === 'true';

export const config = {
    serverPort: getEnvNumber('SERVER_PORT') || 8000,
    database: {
        client: 'pg',
        connection: {
            host: getEnvString('DATABASE_HOST'),
            user: getEnvString('DATABASE_USER'),
            password: getEnvString('DATABASE_PASSWORD'),
            database: getEnvString('DATABASE_NAME'),
        },
    },
};
