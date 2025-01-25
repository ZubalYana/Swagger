const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns a list of users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/users', (req, res) => {
    res.json([{name: "user 1", email: "a@b.com"}]).status(200);
})


/**
 * @swagger
 * /users/users:
 *   post:
 *     tags:
 *       - Users
 *     description: Returns a list of users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of users
 *       201:
 *         description: A list of users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string 
 */
router.post('/users', (req, res) => {
   const goods = req.body;
   res.status(201).json(goods);
})


module.exports = router