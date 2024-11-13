import { Router } from "express";

const router = Router();

router.get('/categorias', (req, res) => {
    res.send('Categorias de todos los productos');        
});

export default router;
