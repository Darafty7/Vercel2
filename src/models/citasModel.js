import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const citas = sequelize.define('cita', {
  cita_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  aprendiz_id: {
    type: DataTypes.INTEGER.UNSIGNED,//llave foranea de Aprendiz
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  //llave foranea de horas
  hora_id: {
    type: DataTypes.TIME, // Este tipo de dato se puede almacenar horas en formato "12:30:00" o "18:45:00".           
    allowNull: false
  },

  descripcion: {
    type: DataTypes.TEXT,
  },
}, {
  //CreatedAt y UpdatedAt no aparescan.
  timestamps: false
});


export default citas;