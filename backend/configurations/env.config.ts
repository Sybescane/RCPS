import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export default () => ({
   port: parseInt(process.env.PORT, 10) || 3000, 
   database: {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      entities: ['**/**/*.entity{.js,.ts}'],
      logging: true,
      synchronize: false,
      migrationsTableName: 'migrations',
      migrations: ['dist/src/migrations/*{.ts,.js}']
   }
})