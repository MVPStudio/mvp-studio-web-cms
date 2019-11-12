import {createLogger, format, transports } from 'winston';
const {combine, colorize, timestamp, prettyPrint } = format;

const defaultLoggingConfig = {
    format: combine(timestamp(), prettyPrint(), colorize()),
    transports: [
        new (transports.Console)({
            level: 'debug',
            handleExceptions: false,
            silent: false,
        }),
    ],
};

export const logger = createLogger(defaultLoggingConfig);
