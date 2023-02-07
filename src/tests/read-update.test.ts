import { MikroORM } from '@mikro-orm/postgresql';
import { Course, Customization, Topic } from '../entities';
import config from '../mikro-orm.config';

let orm: MikroORM;

beforeAll(async () => {
    orm = await MikroORM.init(config);
    await orm.schema.refreshDatabase();
});

afterAll(() => orm.close(true));

test('json property hydration', async () => {
    let em = orm.em.fork();

    function createCustomization() {
        const topic = new Topic();

        const customization = new Customization();
        customization.topics = [topic];
        em.persist(customization);

        return customization;
    }

    const course1 = new Course();
    course1.published = createCustomization();
    em.persist(course1)

    const course2 = new Course();
    course2.draft = createCustomization();
    em.persist(course2)

    await em.flush();
    em.clear();

    em = em.fork();
    const results = await em.find(Course, {}, { populate: true });

    // expect?? - it not to update when a query happens
});