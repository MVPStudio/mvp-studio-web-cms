const getEnvString = (name: string, defaultValue?: string): string => {
    let value = '';
    try {
        if (!(process.env[name]) && (defaultValue === undefined || defaultValue === '')) {
            throw new Error('Environment variable is undefined');
        } else if (!(process.env[name])) {
            value = defaultValue as string;
        } else {
            value = process.env[name] as string;
        }
    } catch (e) {
        // tslint:disable-next-line no-console
        console.error(e);
    }
    return value;
};
const getEnvNumber = (name: string, defaultValue?: string): number => parseInt(getEnvString(name, defaultValue), 10);
const getEnvBoolean = (name: string, defaultValue?: string): boolean => {
    if (getEnvString(name, defaultValue) === 'true' || getEnvString(name, defaultValue) === 'True') {
        return true;
    }
    return false;
};

export const config = {
    serverPort: getEnvNumber('SERVER_PORT', '8000'),
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
