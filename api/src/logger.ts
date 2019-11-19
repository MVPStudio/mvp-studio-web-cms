import {createLogger, format, transports, Logger } from 'winston';
const {combine, colorize, timestamp, prettyPrint, metadata} = format;

const defaultLoggingConfig = {
    format: combine(metadata(), timestamp(), prettyPrint(), colorize()),
    transports: [
        new (transports.Console)({
            level: 'debug',
            handleExceptions: false,
            silent: false,
        }),
    ],
};

export const logger = createLogger(defaultLoggingConfig);

//Child logger to know what class we are in
export function childLogger(location: String):Logger {
    return logger.child({ location });
}
