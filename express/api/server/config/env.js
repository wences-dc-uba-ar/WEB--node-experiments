'use strict';

const env = {
  PORT: process.env.PORT || 8089,
  // PORT: process.env.PORT || 3281,
  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:mysql://localhost:3306/bpm',
  DATABASE_NAME: process.env.DATABASE_NAME || 'bpm',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'bpm',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'bpm',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;