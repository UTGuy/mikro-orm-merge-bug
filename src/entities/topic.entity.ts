import { Embeddable, Embedded, Property } from "@mikro-orm/core";
import { Page } from "./page.entity";

@Embeddable()
export class Topic {
    @Embedded(() => Page, { array: true })
    pages: Page[];
}