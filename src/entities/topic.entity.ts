import { Embeddable, ManyToOne, Property } from "@mikro-orm/core";
import { Media } from "./media.entity";

@Embeddable()
export class Topic {
    @Property()
    private _name: string;

    get name(): string {
        return this._name;
    }

    @ManyToOne({ entity: () => Media, nullable: true, eager: true })
    video?: Media;
}