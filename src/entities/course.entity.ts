import { Entity, Index, ManyToOne, OneToOne, PrimaryKey } from "@mikro-orm/core";
import { Customization } from "./customization.entity";
import { IdCreator } from "./idCreator";

@Entity()
export class Course {
    constructor() {
        this.id = IdCreator.create();
    }

    @PrimaryKey()
    id!: string;

    @Index()
    @OneToOne({ entity: () => Customization })
    published?: Customization;
}