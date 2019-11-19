const getEnvString = (name: string, defaultValue: string): string => {
    let value = '';
    try {
        if(!(process.env[name]) && defaultValue === '') {
            throw new Error('Environment variable is undefined');
        } else if(!(process.env[name])) {
            value = defaultValue;
        } else {
            value = <string> process.env[name];
        }
    }
    catch(e) {
        console.log(e);
    }
    return value;
}
const getEnvNumber = (name: string, defaultValue: string): number => parseInt(getEnvString(name, defaultValue), 10);
const getEnvBoolean = (name: string, defaultValue: string): boolean => getEnvString(name, defaultValue) === 'true';

export const config = {
    serverPort: getEnvNumber('SERVER_PORT', '8000'),
    database: {
        client: 'pg',
        connection: {
            host: getEnvString('DATABASE_HOST', 'localhost'),
            user: getEnvString('DATABASE_USER', 'postgres'),
            password: getEnvString('DATABASE_PASSWORD', 'password'),
            database: getEnvString('DATABASE_NAME', 'db'),
        },
    },
};
