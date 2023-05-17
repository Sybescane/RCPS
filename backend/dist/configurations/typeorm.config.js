"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ormConfig = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'education',
    username: 'education',
    password: 'password',
    entities: ['dist/**/*.entity{.ts,.js}'],
    logging: true,
    synchronize: false,
    migrationsTableName: 'migrations',
    migrations: ['dist/src/migrations/*{.ts,.js}'],
});
exports.default = ormConfig;
//# sourceMappingURL=typeorm.config.js.map