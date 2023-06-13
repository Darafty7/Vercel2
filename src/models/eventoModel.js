import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Producto = sequelize.define('evento', {
  idEvento: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  
    nombre: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    imagen: {
      type: DataTypes.BLOB('long'),
      allowNull: false
    }
});