import { Migration } from '@mikro-orm/migrations';

export class Migration20230203135340 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "customization" ("id" varchar(255) not null, "topics" jsonb null, constraint "customization_pkey" primary key ("id"));');
  }

}
