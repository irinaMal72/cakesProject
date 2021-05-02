import {makeAutoObservable} from "mobx";

export  default class UserStore{
    constructor() {
        this._types=[
            {id: 1, name: 'Торты'},
            {id: 1, name: 'Пироженые'},
        ]
        this._cakes=[
          //должны быть элементы
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setCakes(cakes) {
        this._cakes = cakes
    }

    get IsTypes() {
        return this._types
    }

    get Cakes() {
        return this._cakes
    }
}