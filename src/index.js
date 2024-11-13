import express from "express";

import productosRouter from "./routes/productos.routes.js";
import categoriasRouter from "./routes/categorias.routes.js";

const app = express();

app.use(express.json());

app.use('/api', productosRouter);
app.use('/api', categoriasRouter);

app.listen(3000)
console.log('Servidor corriendo en el puerto', 3000)

