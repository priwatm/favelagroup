import {action, makeObservable, observable} from "mobx";
import {User} from "src/types/models";
import {anonymous} from 'src/constants/security'

export class SecurityStore {
    @observable
    user: User = anonymous;

    @observable
    error: string = '';

    constructor() {
        makeObservable(this)
    }

    @action
    setUser(user: User) {
        this.user = user
    }

    @action
    setError(error: string) {
        this.error = error;
    }

    @action
    unauthorize() {
        this.user = anonymous;
    }
}
