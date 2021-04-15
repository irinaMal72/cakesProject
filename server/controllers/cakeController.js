const  uuid = require('uuid')
const path = require('path')
const  {Cake} = require('../models/models')
const  ApiError = require('../error/ApiError')

class  CakeController {
    async create(req,res,next){
        try{
            const {name,description,price,typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v8() + ".jpg"
            img.mv(path.resolve(__dirname,'..','static',fileName))


            const  cake = await Cake.create({name,description,price,typeId,img:fileName})
            return  res.json(cake)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {typeId,limit,page} = req.query
        limit = limit || 9
        page = page || 1
        let offset = page * limit - limit
        let cakes
        if(!typeId){
            cakes = await Cake.findAndCountAll({limit,offset})

        }else {
            cakes = await Cake.findAndCountAll({where:{typeId},limit,offset})
        }
        return  res.json(cakes)
    }
    async getOne(req,res){
        const {id} = req.params
        const cake = await Cake.findOne({where:{id}})
    }
}

module.exports = new CakeController()