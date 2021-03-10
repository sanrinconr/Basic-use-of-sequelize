const {
  Sequelize,
  DataTypes
} = require("sequelize")

const USER = "henry"
const PASSWORD = "12345"
const db = new Sequelize(`postgres://${USER}:${PASSWORD}@localhost:5432/henryblog`)

//Tablas 
const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  }
})

const Page = db.define('Page', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  urlTitle: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
})

const Category = db.define('Category', {
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
})

//Relaciones
User.hasMany(Page);
Page.belongsToMany(Category, { through: 'Page_have_category' })

module.exports = db