const express = require('express');
const router = express.Router();
/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns a list of products     
 *     produces:
 *       - application/json 
 *     responses:
 *       200:     
 *         description: A list of products
 */
router.get('/products', (req, res) => {
    res.json({name: "product 1"}).status(200);
})


/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     description: Returns a list of products     
 *     produces:
 *       - application/json 
 *     responses:
 *       200:     
 *         description: A list of products
 */ 
router.post('/products', (req, res) => {
   const user = req.body;
   res.status(201).json(user);
})


module.exports = router