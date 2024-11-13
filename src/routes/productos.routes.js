import { Router } from "express";
import { PrismaClient } from "@prisma/client"; 

const router = Router();
const prisma = new PrismaClient()


router.get('/productos', async (req, res) => {
    const productos = await prisma.producto.findMany();
    res.json(productos)      
})

router.post('/productos', async (req, res) => {
    const nuevoProducto = await prisma.producto.create({
        data: req.body,
    });
    res.json(nuevoProducto);
});         

export default router;
