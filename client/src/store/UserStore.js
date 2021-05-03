import {makeAutoObservable} from "mobx";

export  default class UserStore{
    constructor() {
        this._isAuth=true //_ для того, чтобы указать, что переменная изменяться не может
        this._user=false
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}