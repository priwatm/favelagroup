import {action, makeObservable, observable} from "mobx";
import {VisibleContent} from "src/types/models";
import {emptyVisible} from "src/constants/empty";

export class ContentStore {

    @observable
    visibleHeader: VisibleContent = emptyVisible;

    constructor() {
        makeObservable(this);
    }

    @action
    setVisibleHeader(visible: VisibleContent) {
        this.visibleHeader = visible;
    }
}
