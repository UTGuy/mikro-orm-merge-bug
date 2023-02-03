import { FlushMode, Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { Course, Customization, Topic, Page, Media } from './entities';

const config: Options<PostgreSqlDriver> = {
    metadataProvider: TsMorphMetadataProvider,
    entities: [Course, Customization, Topic, Page, Media],
    type: 'postgresql',
    host: process.env.DB_CONNECTION_HOST,
    port: parseInt(process.env.DB_CONNECTION_PORT!),
    dbName: process.env.DB_CONNECTION_DBNAME,
    user: process.env.DB_CONNECTION_USER,
    password: process.env.DB_CONNECTION_PASSWORD,
    debug: process.env.DB_CONNECTION_DEBUG == "true",
    flushMode: FlushMode.COMMIT
}

export default config;