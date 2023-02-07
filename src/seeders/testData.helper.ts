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

    public createCustomization() {
        const topic = new Topic();
        const page = new Page();
        topic.setPages([page]);

        const customization = new Customization();
        customization.setTopics([topic]);
        this.em.persist(customization);
        
        return customization;
    }
}