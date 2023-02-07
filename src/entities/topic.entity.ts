import { Embeddable, Embedded, Property } from "@mikro-orm/core";

@Embeddable()
export class Topic {
    @Property()
    private _name: string;

    get name(): string {
        return this._name;
    }
}