const express = require('express');
const app = express();
const PORT = 3000;  
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const predictionRoutes = require('./routes/prediction');
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger API',
            version: '1.0.0',
            description: 'API documentation for my app',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/predictions', predictionRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});