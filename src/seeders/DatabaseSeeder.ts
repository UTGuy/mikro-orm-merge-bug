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

    const course3 = new Course();
    course3.published = helper.createCustomization(`customization-1-3`);
    em.persist(course3)

    const course4 = new Course();
    course4.draft = helper.createCustomization(`customization-1-4`);
    em.persist(course4)
  }
}