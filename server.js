const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
//const seedall = require('./seeds/index');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//const seedAll = require('./seeds/index')

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true })
.then(() => {
  // seedall.seedAll();
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
