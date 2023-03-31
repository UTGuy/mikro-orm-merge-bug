import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Course, Customization, Topic, Page } from '../entities';

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
    page.setAttestations([
      "Att1",
      "Att2"
    ])
    
    const topic = new Topic();
    topic.pages = [
      page
    ]

    const customization = new Customization();
    customization.topics = [
      topic
    ];

    em.persist(customization);

    return customization;
  }
}