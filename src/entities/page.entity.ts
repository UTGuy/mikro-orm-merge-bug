import { Embeddable, Property } from "@mikro-orm/core";
import { IdCreator } from "./idCreator";

@Embeddable()
export class Page {
    constructor() {
        this.id = IdCreator.create();
    }

    @Property()
    id!: string;
    
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

    setAttestations(attestations: string[] = []) {
        this._attestations = attestations;
    }
}