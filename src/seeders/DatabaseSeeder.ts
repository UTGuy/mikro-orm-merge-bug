import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Course, Customization, Topic } from '../entities';

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const course1 = new Course();
    course1.published = this.createCustomization(em);
    em.persist(course1)

    const course2 = new Course();
    course2.draft = this.createCustomization(em);
    em.persist(course2)
  }

  public createCustomization(em: EntityManager) {
    const topic = new Topic();

    const customization = new Customization();
    customization.setTopics([topic]);
    em.persist(customization);

    return customization;
  }
}