import { Embeddable, Property } from "@mikro-orm/core";
import { IdCreator } from "./idCreator";

@Embeddable()
export class Page {
    constructor() {
        this.id = IdCreator.create();
    }

    @Property()
    id!: string;
    
    @Property({ type: "json" })
    private _attestations: string[];

    get attestations() {
        return this._attestations;
    }

    setAttestations(attestations: string[] = []) {
        this._attestations = attestations;
    }
}