import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Media {
    @PrimaryKey()
    id!: string;
    
    @Property()
    name: string;
}