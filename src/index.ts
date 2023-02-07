import { RequestContext } from '@mikro-orm/core';
import { EntityManager, MikroORM } from '@mikro-orm/postgresql';
import { Course } from './entities';
import config from './mikro-orm.config';

async function main() {
    const orm = await MikroORM.init(config);
    const em = orm.em.fork();
    const repo = em.getRepository(Course);
    const results = await repo.find({}, {
        populate: true
    });
    await em.flush();
    await orm.close(true);
}

main().then(console.log).catch(console.error);