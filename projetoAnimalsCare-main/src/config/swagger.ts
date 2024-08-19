import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import path from 'path';
import fs from 'fs';

let swaggerSpec;

try {
  const swaggerFile = path.join(__dirname, '../swagger.json');
  swaggerSpec = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'));
} catch (error) {
  console.error('Erro ao carregar o arquivo swagger.json:', error);
  swaggerSpec = {};
}

export const setupSwagger = (app: Express) => {
  if (process.env.NODE_ENV !== 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
};
