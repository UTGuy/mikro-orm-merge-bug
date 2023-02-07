import { Embeddable, Embedded, Property } from "@mikro-orm/core";
import { Page } from "./page.entity";

@Embeddable()
export class Topic {
    constructor(
    ) {
        this._pages = [];
    }

    @Property()
    private _name: string;

    get name(): string {
        return this._name;
    }

    @Embedded(() => Page, { array: true })
    private _pages: Page[] = [];

    get pages() {
        return [...(this._pages || [])];
    }

    setPages(pages: Page[] = []) {
        this._pages = [...pages];
    }
}