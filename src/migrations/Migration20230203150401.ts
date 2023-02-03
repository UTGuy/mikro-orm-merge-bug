import { Migration } from '@mikro-orm/migrations';

export class Migration20230203150401 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "course" ("id" varchar(255) not null, "published_id" varchar(255) null, constraint "course_pkey" primary key ("id"));');
    this.addSql('create index "course_published_id_index" on "course" ("published_id");');
    this.addSql('alter table "course" add constraint "course_published_id_unique" unique ("published_id");');

    this.addSql('alter table "course" add constraint "course_published_id_foreign" foreign key ("published_id") references "customization" ("id") on update cascade on delete set null;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "course" cascade;');
  }

}
