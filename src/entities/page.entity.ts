import { Embeddable, Embedded, Enum, ManyToOne, Property, t } from "@mikro-orm/core";
import { IdCreator } from "./idCreator";
import { Media } from "./media.entity";

export enum PageType {
    Video = 0,
    Document = 1,
    Attestation = 2,
    Text = 3
}

@Embeddable()
export class Page {
    constructor(name: string, type: PageType) {
        this.id = IdCreator.create();
        this._name = name;
        this.type = type;
        this._attestations = [];
    }

    @Property()
    readonly id: string;

    @Enum(() => PageType)
    public readonly type: PageType;

    @Property()
    private _name?: string;

    get name() {
        return this._name;
    }

    @ManyToOne({ entity: () => Media, nullable: true, eager: true })
    private _video?: Media;

    get video() {
        return this._video;
    }

    @ManyToOne({ entity: () => Media, nullable: true, eager: true })
    private _videoAudio?: Media;

    get videoAudio() {
        return this._videoAudio;
    }

    @ManyToOne({ entity: () => Media, nullable: true, eager: true })
    private _videoImage?: Media;

    get videoImage() {
        return this._videoImage;
    }

    @ManyToOne({ entity: () => Media, nullable: true, eager: true })
    private _document?: Media;

    get document() {
        return this._document;
    }

    @Property({ nullable: true })
    private _documentLink?: string;

    get documentLink() {
        return this._documentLink;
    }

    @Property({ nullable: true, columnType: 'text' })
    private _text?: string;

    get text() {
        return this._text;
    }

    @ManyToOne({ entity: () => Media, nullable: true, eager: true })
    private _textAudio?: Media;

    get textAudio() {
        return this._textAudio;
    }

    private _attestationValue: string[];

    @Property({ type: "json" })
    private get _attestations(): string[] {
        return this._attestationValue;
    }

    private set _attestations(value: string[]) {
        this._attestationValue = value;
    }

    get attestations() {
        return this._attestations;
    }

    @ManyToOne({ entity: () => Media, nullable: true, eager: true })
    private _attestationAudio?: Media;

    get attestationAudio() {
        return this._attestationAudio;
    }

    setName(name: string) {
        this._name = name;
    }

    setVideo(video: Media) {
        if (video == null) {
            this._video = null;
            return;
        }

        this._video = video;
    }

    setVideoAudio(audio: Media) {
        if (audio == null) {
            this._videoAudio = null;
            return;
        }

        this._videoAudio = audio;
    }

    setVideoImage(image: Media) {
        if (image == null) {
            this._videoImage = null;
            return;
        }

        this._videoImage = image;
    }

    setTextAudio(textAudio: Media) {
        if (textAudio == null) {
            this._textAudio = null;
            return;
        }

        this._textAudio = textAudio;
    }

    setAttestationAudio(attestationAudio: Media) {
        if (attestationAudio == null) {
            this._attestationAudio = null;
            return;
        }

        this._attestationAudio = attestationAudio;
    }

    setDocument(document: Media) {
        if (document == null) {
            this._document = null;
            return;
        }

        this._document = document;
        this._documentLink = null;
    }

    setDocumentLink(documentLink: string) {
        if (documentLink == null || documentLink.length == 0) {
            this._documentLink = null;
            return;
        }

        this._documentLink = documentLink;
        this._document = null;
    }

    setText(text: string) {
        if (text == null || text.length == 0) {
            this._text = null;
            return;
        }

        this._text = text;
    }

    setAttestations(attestations: string[] = []) {
        this._attestations = attestations;
    }
}