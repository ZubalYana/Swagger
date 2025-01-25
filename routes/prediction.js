const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /predictions/random:
 *   get:
 *     summary: Returns a random prediction
 *     responses:
 *       200:
 *         description: A random prediction
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 prediction:
 *                   type: string
 *                   example: "Today is your lucky day!"
 */


const predictions = [
    "Today is your lucky day!",
    "You will achieve something great soon.",
    "A surprise is waiting for you around the corner.",
    "An old friend will reach out to you.",
    "You will discover a hidden talent.",
    "Hard work will pay off in unexpected ways.",
    "A new opportunity is on the horizon.",
    "Happiness will come from an unexpected source.",
    "You will meet someone who changes your perspective.",
    "Trust your instincts—they will lead you to success."
  ];

router.get("/random", (req, res) => {
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    res.json({ prediction: randomPrediction }).status(200);
});
  


module.exports = router;