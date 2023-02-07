import { EntityManager } from "@mikro-orm/core";
import {
    Course, Customization, Topic, Page, TopicLocation
} from "../entities";
import { IdHelper } from "./id.helper";

export interface PolicyDocumentOptions {
    includeDocument: boolean;
}

const policyDocumentDefaults: PolicyDocumentOptions = {
    includeDocument: false
}

export class TestDataHelper {
    constructor(private readonly em: EntityManager) {
    }

    public save(course: Course) {
        this.em.persist(course);
    }

    public createCustomization(id: string) {
        const customization = new Customization();
        if (id)
            IdHelper.setId(customization, id);
        customization.setTopics([
            this.createIntroTopic()
        ]);
        this.em.persist(customization);
        return customization;
    }

    public createIntroTopic() {
        const topic = new Topic();
        const videoPage = new Page();
        topic.setPages([videoPage]);
        return topic;
    }
}