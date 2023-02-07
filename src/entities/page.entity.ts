import { Embeddable, Property } from "@mikro-orm/core";

@Embeddable()
export class Page {
    @Property({ nullable: true })
    private _documentLink?: string;

    get documentLink() {
        return this._documentLink;
    }
}