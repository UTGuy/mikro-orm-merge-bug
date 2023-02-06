import { Embedded, Entity, PrimaryKey } from "@mikro-orm/core";
import { IdCreator } from "./idCreator";
import { Topic } from "./topic.entity";

@Entity()
export class Customization {
    constructor() {
        this.id = IdCreator.create();
    }

    @PrimaryKey()
    id!: string;

    @Embedded(() => Topic, { array: true })
    private _topics?: Topic[] = [];

    get topics() {
        return [...(this._topics || [])];
    }

    setTopics(topics: Topic[] = []) {
        this._topics = [...topics];
    }
}