import { RequestContext } from '@mikro-orm/core';
import { EntityManager, MikroORM } from '@mikro-orm/postgresql';
import { Course } from './entities';
import config from './mikro-orm.config';

async function main() {
    const orm = await MikroORM.init(config);
    const em = orm.em.fork();
    const repo = em.getRepository(Course);
    const results = await repo.findAll({
        populate: true
    });
    // results.forEach(value => {
    //     console.log(JSON.stringify(value));
    // })
    await orm.close(true);
}

main().then(console.log).catch(console.error);