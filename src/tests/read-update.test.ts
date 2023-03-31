import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { DatabaseSeeder } from '../seeders/DatabaseSeeder';
import { Course } from '../entities';
import config from '../mikro-orm.config';
import { PostgreSqlMikroORM } from '@mikro-orm/postgresql/PostgreSqlMikroORM';

let orm: MikroORM;
let timeout = 5 * 60 * 1000;

beforeAll(async () => {
    let init = await MikroORM.init(config as any);
    orm = init as any;
    const seeder = orm.getSeeder();
    await orm.getSchemaGenerator().refreshDatabase();
    await seeder.seed(DatabaseSeeder);
}, timeout);

afterAll(() => orm.close(true));

test('json property hydration', async () => {
    const em = orm.em.fork();
    const repo = em.getRepository(Course);
    const results = await repo.find({}, { populate: true });
    await em.flush();
    // expect?? - it not to update when a query happens
}, timeout);