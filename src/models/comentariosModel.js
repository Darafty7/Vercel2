import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { persona } from "./personaModel.js";
export const comentarios = sequelize.define('comentarios', {
    id_Comentarios: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },   
    nombre: {
      type:DataTypes.STRING(50),
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [0, 200] // Límite de caracteres
          }
    },

}, {
    timestamps: true,
});
// //Relaciones de rol con comentarios
comentarios.belongsTo(persona, {foreignkey: "id_Comentarios"});
persona.hasOne(comentarios, {foreignkey: " id_persona"});