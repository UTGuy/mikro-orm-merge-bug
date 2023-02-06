type MutableEntity = {
    -readonly [K in keyof DomainEntity]: DomainEntity[K];
}

interface DomainEntity {
    id: string;
}

export class IdHelper {
    static setId<T extends MutableEntity>(entity: T, id: string): T {
        entity.id = id;
        return entity;
    }
}