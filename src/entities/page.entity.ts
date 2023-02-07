import { Embeddable, Embedded, Enum, ManyToOne, Property, t } from "@mikro-orm/core";
import { IdCreator } from "./idCreator";
import { Media } from "./media.entity";

@Embeddable()
export class Page {
    @Property({ nullable: true })
    private _documentLink?: string;

    get documentLink() {
        return this._documentLink;
    }
}