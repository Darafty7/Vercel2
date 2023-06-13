import { Router } from "express";
//impost de multer para subir img
import multer from 'multer';
//Importa el controlador aprendizController
import {  crearImagen, verimg, deleteimg, idimg } from "../controllers/eventosController.js";
const router = Router()
//esta funcion nos ayuda ala creacionde una nueva carpeta y para poder guardar la img
const storage = multer({ dest: '/public' });


//rutas de eventos
router.get('/imagenes', verimg);
router.delete('/evento/:id', deleteimg);
router.post('/imagen', storage.single('imagen'), crearImagen);
router.get('/evento/:id', idimg);


//funcion para controlar los probelas que no causa el cors
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


export default router;