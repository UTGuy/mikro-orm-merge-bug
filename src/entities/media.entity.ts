import { Entity, PrimaryKey } from "@mikro-orm/core";
import { IdCreator } from "./idCreator";

export enum MediaType {
    Video = 0,
    Document = 1,
    Audio = 2,
    Image = 3
}

@Entity()
export class Media {
    constructor() {
        this.id = IdCreator.create();    
    }

    @PrimaryKey()
    id!: string;
}