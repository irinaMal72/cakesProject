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
            {id:1, name: 'Сладкоежка'},
            {id:2, name: 'Муравейник'},
            {id:3, name: 'Наполеон'},
            {id:4, name: 'Красный бархат'},
            {id:5, name: 'Сметанник'},
            {id:6, name: 'Медовик'},

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