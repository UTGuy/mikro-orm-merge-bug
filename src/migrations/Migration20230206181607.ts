import { Migration } from '@mikro-orm/migrations';

export class Migration20230206181607 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "customization" rename column "topics" to "_topics";');

    this.addSql('alter table "course" add column "draft_id" varchar(255) null;');
    this.addSql('alter table "course" add constraint "course_draft_id_foreign" foreign key ("draft_id") references "customization" ("id") on update cascade on delete set null;');
    this.addSql('create index "course_draft_id_index" on "course" ("draft_id");');
    this.addSql('alter table "course" add constraint "course_draft_id_unique" unique ("draft_id");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "course" drop constraint "course_draft_id_foreign";');

    this.addSql('alter table "customization" rename column "_topics" to "topics";');

    this.addSql('drop index "course_draft_id_index";');
    this.addSql('alter table "course" drop constraint "course_draft_id_unique";');
    this.addSql('alter table "course" drop column "draft_id";');
  }

}
