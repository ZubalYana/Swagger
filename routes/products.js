const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /products/products:
 *   get:
 *     summary: Returns the list of all products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:       
 *                     $ref: '#/components/schemas/Product'    
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:  
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 * 
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The product ID
 *         name:
 *           type: string
 *           description: The product name
 *       required:
 *         - id
 *         - name
 * 
 */

router.get("/products", (req, res) => {
    res.json({
        products: [
            {
                id: 1,
                name: "Product 1"
            },
            {
                id: 2,
                name: "Product 2"
            }
        ]
    }).status(200);
});

router.post("/products", (req, res) => {
    const product = req.body;
    res.json(product).status(201);
})
module.exports = router;