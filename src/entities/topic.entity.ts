import { Embeddable, Embedded, Property } from "@mikro-orm/core";
import { IdCreator } from "./idCreator";
import { Page } from "./page.entity";

@Embeddable()
export class Topic {
    constructor() {
        this.id = IdCreator.create();
    }

    @Property()
    id!: string;

    @Embedded(() => Page, { array: true })
    public pages: Page[] = [];
}