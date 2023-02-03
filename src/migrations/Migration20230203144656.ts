import { Migration } from '@mikro-orm/migrations';

export class Migration20230203144656 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "media" ("id" varchar(255) not null, constraint "media_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "media" cascade;');
  }

}
