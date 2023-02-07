import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Course, Customization, Page, Topic } from '../entities';

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
    const page = new Page();

    const topic = new Topic();
    topic.setPages([page]);

    const customization = new Customization();
    customization.setTopics([topic]);
    em.persist(customization);

    return customization;
  }
}