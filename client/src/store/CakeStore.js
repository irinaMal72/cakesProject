import {makeAutoObservable} from "mobx";

export  default class UserStore{
    constructor() {
        this._types=[
            {id: 1, name: 'Торты'},
            {id: 2, name: 'Пирожные'},
            {id: 3, name: 'Кексы'},
            {id: 4, name: 'Печенье'},
        ]
        this._cakes=[
          //должны быть элементы
        ]

        this._selectedType={}
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

    get types() {
        return this._types
    }

    get cakes() {
        return this._cakes
    }

    get selectedType() {
        return this._selectedType
    }

}