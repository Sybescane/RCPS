declare const _default: () => {
    port: number;
    jwt: string;
    database: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        autoLoadEntities: boolean;
        entities: string[];
    };
};
export default _default;
