import { MikroORM } from '@mikro-orm/postgresql';
import { DatabaseSeeder } from '../seeders/DatabaseSeeder';
import { Course } from '../entities';
import config from '../mikro-orm.config';

let orm: MikroORM;

beforeAll(async () => {
    orm = await MikroORM.init(config);
    const seeder = orm.getSeeder();
    await orm.getSchemaGenerator().refreshDatabase();
    await seeder.seed(DatabaseSeeder);
});

afterAll(() => orm.close(true));

test('json property hydration', async () => {
    const em = orm.em.fork();
    const repo = em.getRepository(Course);
    const results = await repo.find({}, { populate: true });
    await em.flush();
    // expect?? - it not to update when a query happens
});