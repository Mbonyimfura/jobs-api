const swaggerUi=require('swagger-ui-express');
const swaggerJSDocs=require('swagger-jsdoc');
const jobRouteDocs=require('./job');
const userRouteDocs=require('./user')
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Job Backend',
      description: 'job-api.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
      {
        url: 'https://jobs-api-5qfk.onrender.com/',
        description: 'Production server',
      },
    ],
    tags: [ 
      { name: 'job', description: 'job Routes' },
    ],
    components: {
      securitySchemes: {
        token: {
          type: 'apiKey',
          scheme: 'Bearer',
          bearerFormat: 'JWT',
          name:"authorization",
          in:"header"
        },
      },
    },
    paths: {...userRouteDocs.userRouteDocs, ...jobRouteDocs.JobRouteDocs},
  },
  apis: ['../routes/**/*.js'],
};
const swaggerSpec = swaggerJSDocs(options);
const swaggerDocs = (app) => {
  app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec,{explorer:true,
    customCssUrl:
    "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",}));
  app.get('/documentation.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

module.exports= swaggerDocs;