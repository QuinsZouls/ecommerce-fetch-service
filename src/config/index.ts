import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT = 3000, LOG_FORMAT = 'dev', LOG_DIR = '/tmp/logs', ORIGIN = '*' } = process.env;

// i18n
export const LANGUAGES = ['en'];
export const FALLBACK_LANGUAGE = 'en';
export const NAMESPACES = ['server', 'error'];
export const DEFAULT_NAMESPACE = 'server';
