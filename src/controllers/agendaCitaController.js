// Importar el modelo de Sequelize y la instancia de Sequelize
import { Error } from "sequelize";
import { citas } from "../models/citasModel.js";


// Metodo para obtener todos las citas
export async function getAppoiments(req, res) {
  try {
    // Obtener todos las citas de la base de datos
    const appoiment = await citas.findAll(
      {
        atributes: ["cita_id","aprendiz_id","fecha","hora_id","Asistencia"]
      });
    res.json(appoiment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message:error.message });
  }
}

//Metodo para obtener citas por id
export async function getAppoiment(req, res) {
  const { cita_id } = req.params;
  try {
    const appoiment = await citas.findOne(
      {
        where: {
          cita_id,
        }
      }
    );
    res.json(appoiment);
  } catch (error) {
    return res.status(500).json({ message: "Appoiment Not Fauld" });
  }
}

// Método para crear una cita
export async function createAppoiment(req, res) {
  const { aprendiz_id,fecha,hora_id,Asistencia } = req.body;
  if (!comentaio){
    return res.status(400).json({ message:Error.message})
  }
  try {
  
    let comment = await comentarios.create({ comentario,nombre },
       {
        fields:  ["comentario","nombre"]
    }
    );
    // return res.status(200).json({ message: 'Comentario creado correctamente' })
    res.json(comment)
  } catch (error) {
    // if (!comentario){
    //   return res.status(400).json({ message:Error.message})
    // }
    console.error(error);
    res.status(500).json({ message: error.message, });

  }
}

// Controlador para eliminar un comentario forma 1
export async function deleteAppoiment(req, res) {
  const { id } = req.params;
  try {
    await comentarios.destroy({
      where: {
       id_Comentarios : id,
      },
    });
    return res.status(200).json({ message: 'Cita eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}