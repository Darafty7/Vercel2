import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const juego = sequelize.define('juegos',{
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING(80),
        
    },
});