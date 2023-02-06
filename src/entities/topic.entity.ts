import { Embeddable, Embedded, Property } from "@mikro-orm/core";
import { IdCreator } from "./idCreator";
import { Page } from "./page.entity";
import { TopicLocation } from "./topicLocation";

@Embeddable()
export class Topic {
    constructor(
        name: string,
        location: TopicLocation
    ) {
        this.id = IdCreator.create();
        this._name = name;
        this._location = location;
        this._pages = [];
    }

    @Property()
    readonly id: string;

    @Property()
    private _name: string;

    get name(): string {
        return this._name;
    }

    @Property()
    private _location: number;

    get location() {
        return this._location;
    }

    @Embedded(() => Page, { array: true })
    private _pages: Page[] = [];

    get pages() {
        return [...(this._pages || [])];
    }

    setPages(pages: Page[] = []) {
        this._pages = [...pages];
    }

    setLocation(location: TopicLocation) {
        this._location = location;
    }

    setName(name: string) {
        this._name = name;
    }
}