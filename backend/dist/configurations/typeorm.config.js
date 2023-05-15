"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configOrm = void 0;
require("dotenv/config");
exports.configOrm = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: ['**/**/*.entity{.js,.ts}'],
    logging: true,
    synchronize: false,
    migrationsTableName: 'migrations',
    migrations: ['dist/src/migrations/*{.ts,.js}']
};
//# sourceMappingURL=typeorm.config.js.map