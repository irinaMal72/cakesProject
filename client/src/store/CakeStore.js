import {makeAutoObservable} from "mobx";

export  default class UserStore{
    constructor() {
        this._types=[]
        this._cakes=[]
        this._selectedType={}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setCakes(cakes) {
        this._cakes = cakes
    }

    setSelectedType(type){
        this._selectedType=type
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }

    get cakes() {
        return this._cakes
    }

    get selectedType() {
        this.setPage(1)
        return this._selectedType
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

}