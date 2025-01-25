const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /prediction/random:
 *   get:
 *     tags:    
 *       - Prediction
 *     description: Returns a list of predictions
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of predictions
 */
router.get('/random', (req, res) => {
    const predictions = [
  "Сьогодні твоя посмішка зарядить оточуючих позитивом!",
  "Не бійся ризикувати – удача вже на твоєму боці.",
  "Твоя доброта повернеться до тебе втричі.",
  "Гарна новина вже на шляху до тебе.",
  "Спробуй щось нове – це приведе тебе до несподіваного щастя.",
  "Твоя мрія вже ближче, ніж здається.",
  "Покупка цього тижня стане особливо вдалою.",
  "Хтось поруч із тобою зараз дуже цінує твою підтримку.",
  "Навіть найменший крок вперед наблизить тебе до великої перемоги.",
  "Сьогодні – чудовий день для початку нового проекту."
];

res.send(predictions[Math.floor(Math.random() * predictions.length)]).status(200);
})

module.exports = router;