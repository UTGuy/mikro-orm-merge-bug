import { Entity, PrimaryKey } from "@mikro-orm/core";
import { IdCreator } from "./idCreator";

@Entity()
export class Media {
    constructor() {
        this.id = IdCreator.create();    
    }

    @PrimaryKey()
    id!: string;
}