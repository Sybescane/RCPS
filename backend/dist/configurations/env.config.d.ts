declare const _default: () => {
    port: number;
    database: {
        type: string;
        host: string;
        port: number;
        database: string;
        username: string;
        password: string;
        entities: string[];
        logging: boolean;
        synchronize: boolean;
        migrationsTableName: string;
        migrations: string[];
    };
};
export default _default;
