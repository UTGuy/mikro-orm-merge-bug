import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Customization, Page, Topic, Media, Course } from '../entities';

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const media = new Media();
    em.persist(media);
    
    const c1 = create(media);
    em.persist(c1);

    const c2 = create(media);
    em.persist(c2);

    const c3 = create(media);
    em.persist(c3);
  }
}

function create(media: Media) {
  const p1 = new Page();
  p1.setAttestations([
    'attestation1',
    'attestation2'
  ])
  p1.media = media;

  const t1 = new Topic();
  t1.pages = [p1]

  const c = new Customization();
  c.topics = [t1]

  const course = new Course();
  course.published = c;

  return course;
}