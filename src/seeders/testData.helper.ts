import { EntityManager, wrap } from "@mikro-orm/core";
import {
    Course, Customization, Media,
    Topic, MediaType, Page, PageType, TopicLocation
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
            this.createIntroTopic(),
            // this.createPolicyTopic(),
            // this.createSummaryTopic()
        ]);
        this.em.persist(customization);
        return customization;
    }

    public createIntroTopic() {
        const topic = new Topic("Introduction", TopicLocation.Intro);
        const videoPage = new Page();
        const textPage = new Page();
        topic.setPages([videoPage, textPage]);
        return topic;
    }

    // public createPolicyTopic(options: PolicyDocumentOptions = policyDocumentDefaults) {
    //     const topic = new Topic("Policy Document", TopicLocation.Policy);
    //     const documentPage = new Page("Policy Document", PageType.Document);
    //     if (options.includeDocument)
    //         documentPage.setDocument(this.createDocument());
    //     documentPage.setText("Lorem Ipsum");
    //     documentPage.setTextAudio(this.createAudio(true));
    //     const attestationPage = new Page("Policy Attestations", PageType.Attestation);
    //     attestationPage.setAttestations([
    //         "Statement 1",
    //         "Statement 2"
    //     ]);
    //     attestationPage.setAttestationAudio(this.createAudio(true));
    //     topic.setPages([documentPage, attestationPage]);
    //     return topic;
    // }

    // public createSummaryTopic() {
    //     const topic = new Topic("Summary", TopicLocation.Summary);
    //     const videoPage = new Page(null, PageType.Video);
    //     videoPage.setVideo(this.createVideo());
    //     const textPage = new Page("Summary", PageType.Text);
    //     textPage.setText("Summary Text");
    //     textPage.setTextAudio(this.createAudio());
    //     topic.setPages([videoPage, textPage]);
    //     return topic;
    // }

    // createVideo(isProcessed: boolean = true, hasError: boolean = false) {
    //     const media = new Media();
    //     return media;
    // }

    // createAudio(isProcessed: boolean = true, hasError: boolean = false) {
    //     const media = new Media();
    //     return media;
    // }

    // createDocument(isProcessed: boolean = true, hasError: boolean = false) {
    //     const media = new Media();
    //     return media;
    // }
}