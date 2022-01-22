'use strict';
const sequelizePaginate = require('sequelize-paginate');
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull:false,
      references:{
        model: "Roles",
        key: "id"
      }
    },
    fname: {
      type: DataTypes.STRING(255),
      allowNull:false
    },
    lname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    genderId: {
      type: DataTypes.INTEGER(11),
      allowNull:false,
      references:{
        model: "Genders",
        key: "id"
      }
    },
    nationalCode: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    indexes: [
      // add a FULLTEXT index
      { type: 'FULLTEXT', name: 'fname', fields: ['fname', 'lname'] }
    ],
  });
  
  Client.associate = function(models) {
    Client.belongsToMany(models.Doctor, { through: models.ClientDoctor});
    Client.hasMany(models.ClientSubset, { as: "clientSubsets", foreignKey: "clientId" });
  };

  sequelizePaginate.paginate(Client);
  return Client;
};