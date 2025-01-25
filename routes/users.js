const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /users/users:
 *   get:
 *     summary: Returns the list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:       
 *                     $ref: '#/components/schemas/User'    
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 * 
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 * requestBody:
 *   required: true
 *   content:
 *     application/json:
 *       schema:
 *         $ref: '#/components/schemas/User'    
 * 
 */
router.get("/users", (req, res) => {
    res.json({
        users: [
            {
                id: 1,
                name: "John Doe"
            },
            {
                id: 2,
                name: "Jane Doe"
            }
        ]
    }).status(200);
});

router.post("/users", (req, res) => {
    const user = req.body;
    res.json(user).status(201);
})

module.exports = router;