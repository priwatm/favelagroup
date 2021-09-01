import {User, VisibleContent} from 'src/types/models'
import {StateManagement, ContentManagement} from "src/domain/managers/interfaces/state-management";
import {anonymous} from "src/constants/security";
import {emptyVisible} from "src/constants/empty";

export class ApplicationManager {
    constructor(
        private stateManager: StateManagement,
        private stateContent: ContentManagement
    ) {}

    initialize(): void {
        try {
            this.stateManager.securityStore.setUser(anonymous);
            this.stateContent.contentStore.setVisibleHeader(emptyVisible);
        } catch (error) {
            //Ошибка
        }
    }

    get user(): User {
        return this.stateManager.securityStore.user;
    }

    set user(user: User) {
        this.stateManager.securityStore.setUser(user);
    }

    get visibleHeader(): VisibleContent {
        return this.stateContent.contentStore.visibleHeader;
    }

    set visibleHeader(visibleContent: VisibleContent) {
        this.stateContent.contentStore.setVisibleHeader(visibleContent);
    }


}
