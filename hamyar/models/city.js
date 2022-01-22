'use strict';
const { Op } = require("sequelize");
const sequelizePaginate = require('sequelize-paginate');
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    title: {
      type: DataTypes.STRING(255)
    },
    provinceId: {
      type: DataTypes.INTEGER(11),
      allowNull:false,
      references:{
        model: "Provinces",
        key: "id"
      }
    },
    flag: {
      type: DataTypes.BOOLEAN,
      defaultValue:true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  City.associate = function(models) {
    City.belongsTo(models.Province, {as: "province",foreignKey: "provinceId"});
    City.hasMany(models.Exprerience, { as: "exprerience", foreignKey: "cityId" });
  };

  City.findOneById = async (id, flag = true) => {
    const city = await City.findOne({
      where: {
        [Op.and]: [
          { 'id': id },
          { 'flag': true }
        ]
      },
    });
    return city;
  }
  
  sequelizePaginate.paginate(City);
  return City;
};