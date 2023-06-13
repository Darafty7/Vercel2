//IMPORTAMOS EXPRESS
import express from "express";
//Importamos Morgan desde express
import morgan from "morgan";
//Importamos Rutas de eventos
import eventosRouter from './routes/eventosRouter.js'
// importamos Rutas de comentarios
import comentarioRoutes from "./routes/comentariosRouter.js";
//Importamos la ruta de login
import loginRouter from "./routes/loginRouter.js";

//importamos cors
import cors from 'cors'

const app = express();
////////////////////////Middlewares/////////////////////////////////////
//esto para que el servidor interprete los datos en formato json
app.use(morgan('dev'));
app.use(express.json());
//aqui utilizamos  cors para conectar con vue
app.use(cors());
//ruta de eventos
app.use('/', eventosRouter);
//Ruta comentarios
app.use("/", comentarioRoutes);
//Rutas login
app.use('/', loginRouter);
//conection

//expor de app para poderlo utilizar en index
export default app;

