import { createConnection, getConnection } from "typeorm";
// import typeOrmConfig from '../../ormconfig.json';
import { isNil } from '@nestjsx/util';
import { join } from "path";

const getDBConnection = async () => {
  let connection;
  const prod = process.env.NODE_ENV === 'production'
  if (prod) {
    connection = await createConnection({
      type: (process.env.TYPEORM_CONNECTION as any) || 'postgres',
      host: !isNil(process.env.DB_HOST) ? process.env.DB_HOST : '127.0.0.1',
      port: !isNil(process.env.DB_PORT) ? parseInt(process.env.DB_PORT!, 10) : (((process.env.TYPEORM_CONNECTION as any) || 'postgres') === 'postgres' ? 5432 : 3306),
      username: !isNil(process.env.DB_USERNAME) ? process.env.DB_USERNAME : 'root',
      password: !isNil(process.env.DB_PASSWORD) ? process.env.DB_PASSWORD : 'root',
      database: 'webpricewatcher',
      synchronize: true,
      logging: !isNil(process.env.TYPEORM_LOGGING)
        ? !!parseInt(process.env.TYPEORM_LOGGING!, 10)
        : true,
      // cache: {
      //   type: 'redis',
      //   options: {
      //     host: '127.0.0.1',
      //     port: 6399,
      //   },
      // },
      entities: ['./**/*.entity{.ts,.js}'],
    });
  } else {
    connection = await getConnection();
  }
  return connection;
}

export default getDBConnection;