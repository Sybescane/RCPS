import { DataSource } from 'typeorm';

const ormConfig: DataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'education',
  username: 'education',
  password: 'password',
  entities: ['dist/src/**/*.entity.js'],
  logging: true,
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*{.js,.ts}'],
});
export default ormConfig;