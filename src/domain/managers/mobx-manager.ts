import {SecurityStore, ContentStore} from "src/stores";
import {StateManagement, ContentManagement} from 'src/domain/managers/interfaces/state-management'

export class MobxManager implements StateManagement {
    constructor(public securityStore: SecurityStore) {}
}

export class ContentManager implements ContentManagement {
    constructor(public contentStore: ContentStore) {}
}

