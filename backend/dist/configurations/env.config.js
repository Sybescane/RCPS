"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT) || 3000,
    database: {
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        autoLoadEntities: true,
        entities: ['dist/src/**/*.entity.js'],
    }
});
//# sourceMappingURL=env.config.js.map