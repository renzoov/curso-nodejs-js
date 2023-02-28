const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const app = require('./app');

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
