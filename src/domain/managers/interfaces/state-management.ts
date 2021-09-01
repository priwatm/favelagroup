import {SecurityStore, ContentStore} from 'src/stores'

export interface StateManagement {
    securityStore: SecurityStore;
}

export interface ContentManagement {
    contentStore: ContentStore;
}
