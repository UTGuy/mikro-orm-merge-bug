import { Migration } from '@mikro-orm/migrations';

export class Migration20230207195244 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "customization" ("id" varchar(255) not null, "_topics" jsonb null, constraint "customization_pkey" primary key ("id"));');

    this.addSql('create table "course" ("id" varchar(255) not null, "draft_id" varchar(255) null, "published_id" varchar(255) null, constraint "course_pkey" primary key ("id"));');
    this.addSql('create index "course_draft_id_index" on "course" ("draft_id");');
    this.addSql('alter table "course" add constraint "course_draft_id_unique" unique ("draft_id");');
    this.addSql('create index "course_published_id_index" on "course" ("published_id");');
    this.addSql('alter table "course" add constraint "course_published_id_unique" unique ("published_id");');

    this.addSql('alter table "course" add constraint "course_draft_id_foreign" foreign key ("draft_id") references "customization" ("id") on update cascade on delete set null;');
    this.addSql('alter table "course" add constraint "course_published_id_foreign" foreign key ("published_id") references "customization" ("id") on update cascade on delete set null;');
  }

}
