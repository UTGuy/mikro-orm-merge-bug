import { Embeddable, ManyToOne, Property, t } from "@mikro-orm/core";
import { Media } from "./media.entity";

@Embeddable()
export class Page {
    private _attestations: string[];

    @Property({ type: t.json })
    get attestations(): string[] {
        return this._attestations;
    }

    set attestations(value: string[]) {
        if (typeof value === 'string')
            console.error('ERROR: attestations is string', value)
        else console.log(`OK: attestations is array`, value);
        this._attestations = value;
    }

    setAttestations(attestations: string[]) {
        this.attestations = attestations;
    }

    @ManyToOne({ entity: () => Media, nullable: true, eager: true })
    media: Media;
}