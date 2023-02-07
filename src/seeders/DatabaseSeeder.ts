import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Customization, Page, Topic, Media, Course, PageType } from '../entities';
import { TestDataHelper } from './testData.helper';

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const helper = new TestDataHelper(em);

    const course1 = new Course();
    course1.published = helper.createCustomization(`customization-1-1`);
    em.persist(course1)

    const course2 = new Course();
    course2.draft = helper.createCustomization(`customization-1-2`);
    em.persist(course2)
  }
}