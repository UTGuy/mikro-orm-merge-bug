import { MikroORM } from '@mikro-orm/postgresql';
import { Embedded, Entity, PrimaryKey, Embeddable, OneToOne, Property, t, FlushMode } from '@mikro-orm/core';
import { Course, Customization, Media, Page, Topic } from '../entities';
import { TestDataHelper } from '../seeders/testData.helper';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

let orm: MikroORM;

beforeAll(async () => {
    orm = await MikroORM.init({
        metadataProvider: TsMorphMetadataProvider,
        entities: [Course, Customization, Topic, Page, Media],
        type: 'postgresql',
        host: process.env.DB_CONNECTION_HOST,
        port: parseInt(process.env.DB_CONNECTION_PORT!),
        dbName: process.env.DB_CONNECTION_DBNAME,
        user: process.env.DB_CONNECTION_USER,
        password: process.env.DB_CONNECTION_PASSWORD,
        debug: true,
        flushMode: FlushMode.COMMIT
    });
    await orm.schema.refreshDatabase();
});

afterAll(() => orm.close(true));

test('json property hydration', async () => {
    // let em = orm.em.fork();
    
    // const helper = new TestDataHelper(em);

    // const course1 = new Course();
    // course1.published = helper.createCustomization(`customization-1-1`);
    // em.persist(course1)

    // const course2 = new Course();
    // course2.draft = helper.createCustomization(`customization-1-2`);
    // em.persist(course2)

    // const course3 = new Course();
    // course3.published = helper.createCustomization(`customization-1-3`);
    // em.persist(course3)

    // const course4 = new Course();
    // course4.draft = helper.createCustomization(`customization-1-4`);
    // em.persist(course4)

    // await em.flush();
    // em.clear();

    // em = em.fork();
    // const results = await em.find(Course, {}, { populate: true });
    
    // expect?? - it not to update when a query happens
});