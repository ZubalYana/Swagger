const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();

const PORT = 3000;

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const predictionRoutes = require('./routes/prediction');


const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};


const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/prediction', predictionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})