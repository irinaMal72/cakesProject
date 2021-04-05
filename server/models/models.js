const sequelize = require('../db')
const  {DataTypes} = require('sequelize')

const  User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type: DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"}
})

const  Basket = sequelize.define('basket',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})

const  BasketCake = sequelize.define('basket_cake',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})

const  Cake = sequelize.define('cake',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING, allowNull:false},
    price:{type:DataTypes.DOUBLE, allowNull:false},
    img:{type:DataTypes.STRING, allowNull:false}
})


const  Type = sequelize.define('type',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull:false, unique: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketCake)
BasketCake.belongsTo(Basket)

Type.hasMany(Cake)
Cake.belongsTo(Type)

Cake.hasMany(BasketCake)
BasketCake.belongsTo(Cake)

module.exports = {
    User,
    Basket,
    BasketCake,
    Cake
}