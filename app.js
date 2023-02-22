require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors=require('cors')
const swaggerDocs=require('./documentation/swagger')
//connect db
const connectDB=require('./db/connect')
//middleware
const authenticateUser=require('./middleware/authentication')
//routes
const authRouter=require('./routes/auth')
const jobRouter=require('./routes/jobs')
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
//swagger

app.use(express.json());
// extra packages
app.use(cors())
// routes
app.get('/', (req, res) => {
  res.send('jobs api');
});
swaggerDocs(app);
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',authenticateUser,jobRouter)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    app.listen(port, () =>
   
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
