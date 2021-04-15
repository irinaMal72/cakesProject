const  {Type} = require('../models/models')
const  ApiError = require('../error/ApiError')

class  TypeController {
    async create(req,res){
        const type = await Type.create(req.body)
        return  res.json(type)
    }
    async getAll(req,res){
        const  types = await  Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()